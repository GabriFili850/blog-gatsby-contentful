import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import EmptyState from "../components/EmptyState"
import Layout from "../components/Layout"
import {
  getPostImageAlt,
  normalizeContentfulPosts,
} from "../data/contentful"
import { ContentfulBlogPostEdge } from "../types/contentful"
import {
  Container,
  Title,
  BlogList,
  StyledBlogPostTitle,
  BlogItem,
  BlogLink,
} from "./styles"

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          ...BlogPostListFields
        }
      }
    }
  }
`

interface IndexPageProps {
  data: {
    allContentfulBlogPost: {
      edges: ContentfulBlogPostEdge[]
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const posts = normalizeContentfulPosts(data.allContentfulBlogPost.edges)

  return (
    <Layout>
      <Container>
        <Helmet>
          <title>Gatsby Contentful Project</title>
        </Helmet>
        <Title as="h1">Blog</Title>
        {posts.length === 0 ? (
          <EmptyState
            title="No posts yet"
            description="Publish a Contentful post to see it here."
          />
        ) : (
          <BlogList>
            {posts.map(post => (
              <BlogLink key={post.slug} to={`/blog/${post.slug}`}>
                <BlogItem>
                  <StyledBlogPostTitle as="h2">
                    {post.title}
                  </StyledBlogPostTitle>
                  {post.image?.gatsbyImageData && (
                    <GatsbyImage
                      image={post.image.gatsbyImageData}
                      alt={getPostImageAlt(post)}
                      loading="lazy"
                    />
                  )}
                </BlogItem>
              </BlogLink>
            ))}
          </BlogList>
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage
