const dotenv = require("dotenv")

dotenv.config({ path: ".env.development" })
dotenv.config({ path: ".env" })

const numberArg = process.argv[2]

if (!numberArg) {
  console.error("Missing migration number.")
  process.exit(1)
}

const spaceId = process.env.CONTENTFUL_SPACE_ID
const environmentId = process.env.CONTENTFUL_ENVIRONMENT || "master"
const managementToken = process.env.CONTENTFUL_MANAGEMENT_TOKEN
const locale = process.env.CONTENTFUL_LOCALE || "en-US"

if (!spaceId || !managementToken) {
  console.error("Missing Contentful management credentials.")
  process.exit(1)
}

const baseUrl = `https://api.contentful.com/spaces/${spaceId}/environments/${environmentId}`
const headers = {
  Authorization: `Bearer ${managementToken}`,
  "Content-Type": "application/vnd.contentful.management.v1+json",
}

const toNumber = value => {
  const parsed = Number(value)
  return Number.isNaN(parsed) ? null : parsed
}

const migrationNumber = toNumber(numberArg)

if (migrationNumber === null) {
  console.error("Migration number must be numeric.")
  process.exit(1)
}

const request = async (url, options = {}) => {
  const response = await fetch(url, { ...options, headers: { ...headers, ...options.headers } })
  const body = await response.json()
  return { ok: response.ok, status: response.status, body, headers: response.headers }
}

const publishEntry = async (entryId, version) => {
  const publishUrl = `${baseUrl}/entries/${entryId}/published`
  const result = await request(publishUrl, {
    method: "PUT",
    headers: {
      "X-Contentful-Version": version,
    },
  })

  if (!result.ok) {
    console.error("Failed to publish migration tracker entry.", result.body)
    process.exit(1)
  }
}

const upsertTracker = async () => {
  const searchUrl = `${baseUrl}/entries?content_type=migrationTracker&limit=1`
  const listResult = await request(searchUrl)

  if (!listResult.ok) {
    console.error("Failed to fetch migration tracker entry.", listResult.body)
    process.exit(1)
  }

  const existing = listResult.body.items?.[0]

  if (!existing) {
    const createResult = await request(`${baseUrl}/entries`, {
      method: "POST",
      headers: {
        "X-Contentful-Content-Type": "migrationTracker",
      },
      body: JSON.stringify({
        fields: {
          currentMigration: {
            [locale]: migrationNumber,
          },
        },
      }),
    })

    if (!createResult.ok) {
      console.error("Failed to create migration tracker entry.", createResult.body)
      process.exit(1)
    }

    await publishEntry(createResult.body.sys.id, createResult.body.sys.version)
    return
  }

  const updateResult = await request(`${baseUrl}/entries/${existing.sys.id}`, {
    method: "PUT",
    headers: {
      "X-Contentful-Version": existing.sys.version,
    },
    body: JSON.stringify({
      fields: {
        currentMigration: {
          [locale]: migrationNumber,
        },
      },
    }),
  })

  if (!updateResult.ok) {
    console.error("Failed to update migration tracker entry.", updateResult.body)
    process.exit(1)
  }

  await publishEntry(updateResult.body.sys.id, updateResult.body.sys.version)
}

upsertTracker().catch(error => {
  console.error("Migration tracker update failed.", error)
  process.exit(1)
})
