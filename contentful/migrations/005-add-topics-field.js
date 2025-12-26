module.exports = function (migration) {
  const blogPost = migration.editContentType("blogPost")

  blogPost.createField("topic", {
    name: "Topic",
    type: "Symbol",
    required: false,
    validations: [
      {
        in: [
          "Yoga",
          "Time management",
          "Cooking",
          "Astronomy",
          "Eco-friendly living",
          "Mindfulness",
          "AI",
          "Crypto",
          "Software development",
          "Product strategy",
          "UX design",
          "Leadership",
          "Remote work",
          "Personal finance",
          "Health & nutrition",
          "Entrepreneurship",
          "Marketing",
          "Writing",
          "Psychology",
          "Habit building",
          "Learning",
          "Sustainability",
          "Travel",
          "Photography",
          "Data science",
          "Cybersecurity",
          "Career growth",
          "Startups",
          "Philosophy",
        ],
      },
    ],
  })
}
