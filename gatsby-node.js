const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
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
    reporter.panicOnBuild("Error loading Contentful blog posts", result.errors)
    return
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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type ContentfulBlogPost implements Node {
      topic: String
    }
  `)
}
