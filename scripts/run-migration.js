const path = require("path")
const { spawnSync } = require("child_process")
const fs = require("fs")

const number = process.argv[2]

if (!number) {
  console.error("Usage: npm run contentful:migrate:by-number -- <number>")
  process.exit(1)
}

const normalizeNumber = value => value.toString().padStart(3, "0")
const migrationsDir = path.join(process.cwd(), "contentful", "migrations")
const files = fs.readdirSync(migrationsDir)
const normalizedNumber = normalizeNumber(number)
const match = files.find(file => file.startsWith(`${normalizedNumber}-`))

if (!match) {
  console.error(`Migration not found for number: ${number}`)
  console.error(
    `Available migrations: ${files
      .filter(file => /^\d{3}-/.test(file))
      .map(file => file.slice(0, 3))
      .join(", ")}`
  )
  process.exit(1)
}

const migrationPath = path.join("contentful", "migrations", match)
const args = ["run", "contentful:migrate", "--", migrationPath]

const result = spawnSync("npm", args, { stdio: "inherit", shell: true })

if (result.status !== 0) {
  process.exit(result.status ?? 1)
}

const updateResult = spawnSync(
  "node",
  ["scripts/update-migration-tracker.js", number],
  { stdio: "inherit", shell: true }
)

process.exit(updateResult.status ?? 1)
