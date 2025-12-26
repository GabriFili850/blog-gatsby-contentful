module.exports = function (migration) {
  const topic = migration.createContentType("topic", {
    name: "Topic",
    description: "Topic taxonomy for blog posts.",
    displayField: "name",
  })

  topic.createField("name", {
    name: "Name",
    type: "Symbol",
    required: true,
  })

  topic.createField("slug", {
    name: "Slug",
    type: "Symbol",
    required: true,
    validations: [{ unique: true }],
  })

  topic.createField("description", {
    name: "Description",
    type: "Text",
  })

  topic.createField("color", {
    name: "Color",
    type: "Symbol",
  })

  topic.createField("featured", {
    name: "Featured",
    type: "Boolean",
  })

  topic.createField("sortOrder", {
    name: "Sort order",
    type: "Number",
  })

  const blogPost = migration.editContentType("blogPost")

  blogPost.createField("topics", {
    name: "Topics",
    type: "Array",
    items: {
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["topic"] }],
    },
  })
}
