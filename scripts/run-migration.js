const path = require("path")
const { spawnSync } = require("child_process")
const fs = require("fs")

const number = process.argv[2]

if (!number) {
  console.error("Usage: npm run contentful:migrate:by-number -- <number>")
  process.exit(1)
}

const migrationsDir = path.join(process.cwd(), "contentful", "migrations")
const files = fs.readdirSync(migrationsDir)
const match = files.find(file => file.startsWith(`${number}-`))

if (!match) {
  console.error(`Migration not found for number: ${number}`)
  process.exit(1)
}

const migrationPath = path.join("contentful", "migrations", match)
const args = ["run", "contentful:migrate", "--", migrationPath]

const result = spawnSync("npm", args, { stdio: "inherit", shell: true })
process.exit(result.status ?? 1)
