# Contentful Migrations

This folder contains Contentful migration scripts. Use them to version schema changes over time.

Notes:
- The `000-initial-schema.js` migration is intended for new spaces. If your space already has a `blogPost` content type, update the migration to use `editContentType` instead of `createContentType` or create a new migration for incremental changes.
- Use `CONTENTFUL_MANAGEMENT_TOKEN` (Management API token) when running migrations.
