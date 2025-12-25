const buildRichText = text => ({
  nodeType: "document",
  data: {},
  content: [
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value: text,
          marks: [],
          data: {},
        },
      ],
    },
  ],
})

module.exports = function (migration) {
  migration.transformEntries({
    contentType: "blogPost",
    from: ["content", "contentWithRichtext"],
    to: ["contentWithRichtext"],
    transformEntryForLocale: (fields, locale) => {
      const richText = fields.contentWithRichtext?.[locale]
      const plainText = fields.content?.[locale]

      if (richText) {
        return {
          contentWithRichtext: richText,
        }
      }

      if (!plainText || typeof plainText !== "string") {
        return {
          contentWithRichtext: null,
        }
      }

      return {
        contentWithRichtext: buildRichText(plainText),
      }
    },
  })
}
