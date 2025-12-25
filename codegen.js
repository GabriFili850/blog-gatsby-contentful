const path = require("path")
const dotenv = require("dotenv")

const nodeEnv = process.env.NODE_ENV || "development"
dotenv.config({ path: path.resolve(process.cwd(), `.env.${nodeEnv}`) })
dotenv.config({ path: path.resolve(process.cwd(), ".env") })

const spaceId = process.env.CONTENTFUL_SPACE_ID
const environmentId = process.env.CONTENTFUL_ENVIRONMENT || "master"
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

if (!spaceId || !accessToken) {
  throw new Error(
    "CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN are required for codegen."
  )
}

module.exports = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environmentId}`]:
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
    },
  ],
  documents: ["contentful/queries/**/*.graphql"],
  generates: {
    "src/types/generated/contentful.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
}
