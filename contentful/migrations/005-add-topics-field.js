module.exports = function (migration) {
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
