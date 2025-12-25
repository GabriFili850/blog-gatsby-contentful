module.exports = function (migration) {
  const blogPost = migration.createContentType("blogPost", {
    name: "Blog Post",
    description: "Contentful blog post with title, slug, body, and image.",
    displayField: "title",
  })

  blogPost.createField("title", {
    name: "Title",
    type: "Symbol",
    required: true,
  })

  blogPost.createField("slug", {
    name: "Slug",
    type: "Symbol",
    required: true,
    validations: [
      {
        unique: true,
      },
    ],
  })

  blogPost.createField("content", {
    name: "Content (plain text)",
    type: "Text",
  })

  blogPost.createField("contentWithRichtext", {
    name: "Content (rich text)",
    type: "RichText",
  })

  blogPost.createField("image", {
    name: "Image",
    type: "Link",
    linkType: "Asset",
  })
}
