module.exports = function (migration) {
  const blogPost = migration.editContentType("blogPost")
  blogPost.deleteField("topics")

  migration.deleteContentType("topic")
}
