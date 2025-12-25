module.exports = function (migration) {
  const blogPost = migration.editContentType("blogPost")
  blogPost.deleteField("content")
}
