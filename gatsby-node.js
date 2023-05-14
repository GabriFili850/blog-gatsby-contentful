const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all Contentful blog post nodes
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    console.error(result.errors)
    throw new Error(result.errors)
  }

  // Create blog post pages
  const blogPostTemplate = path.resolve(`./src/templates/blogPost.tsx`)
  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
