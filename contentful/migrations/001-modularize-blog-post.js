module.exports = function (migration) {
  const richTextBlock = migration.createContentType("contentBlockRichText", {
    name: "Content Block - Rich Text",
    description: "Reusable rich text block.",
    displayField: "internalTitle",
  })

  richTextBlock.createField("internalTitle", {
    name: "Internal title",
    type: "Symbol",
    required: true,
  })

  richTextBlock.createField("body", {
    name: "Body",
    type: "RichText",
    required: true,
  })

  const imageBlock = migration.createContentType("contentBlockImage", {
    name: "Content Block - Image",
    description: "Reusable image block with optional caption.",
    displayField: "internalTitle",
  })

  imageBlock.createField("internalTitle", {
    name: "Internal title",
    type: "Symbol",
    required: true,
  })

  imageBlock.createField("image", {
    name: "Image",
    type: "Link",
    linkType: "Asset",
    required: true,
  })

  imageBlock.createField("caption", {
    name: "Caption",
    type: "Symbol",
  })

  const seoMetadata = migration.createContentType("seoMetadata", {
    name: "SEO Metadata",
    description: "Reusable SEO metadata.",
    displayField: "internalTitle",
  })

  seoMetadata.createField("internalTitle", {
    name: "Internal title",
    type: "Symbol",
    required: true,
  })

  seoMetadata.createField("title", {
    name: "SEO title",
    type: "Symbol",
  })

  seoMetadata.createField("description", {
    name: "SEO description",
    type: "Text",
  })

  seoMetadata.createField("image", {
    name: "SEO image",
    type: "Link",
    linkType: "Asset",
  })

  const blogPost = migration.editContentType("blogPost")

  blogPost.createField("blocks", {
    name: "Content blocks",
    type: "Array",
    items: {
      type: "Link",
      linkType: "Entry",
      validations: [
        {
          linkContentType: ["contentBlockRichText", "contentBlockImage"],
        },
      ],
    },
  })

  blogPost.createField("seo", {
    name: "SEO",
    type: "Link",
    linkType: "Entry",
    validations: [
      {
        linkContentType: ["seoMetadata"],
      },
    ],
  })
}
