module.exports = function (migration) {
  const tracker = migration.createContentType("migrationTracker", {
    name: "Migration Tracker",
    description: "Tracks the latest applied migration number.",
    displayField: "currentMigration",
  })

  tracker.createField("currentMigration", {
    name: "Current migration",
    type: "Number",
    required: true,
  })
}
