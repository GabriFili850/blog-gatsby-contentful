import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import EmptyState from "../components/EmptyState"
import Layout from "../components/Layout"
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
} from "../components/Section"
import {
  getPostImageAlt,
  normalizeContentfulPosts,
} from "../data/contentful"
import { ContentfulBlogPostEdge } from "../types/contentful"
import {
  BlogList,
  StyledBlogPostTitle,
  BlogItem,
  BlogLink,
  BlogItemFooter,
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
      <Section aria-labelledby="blog-title">
        <Helmet>
          <title>Gatsby Contentful Project</title>
        </Helmet>
        <SectionHeader>
          <SectionTitle as="h1" id="blog-title">
            Blog
          </SectionTitle>
          <SectionSubtitle>
            Stories, experiments, and notes from the Contentful-powered stack.
          </SectionSubtitle>
        </SectionHeader>
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
                  <BlogItemFooter>Read article</BlogItemFooter>
                </BlogItem>
              </BlogLink>
            ))}
          </BlogList>
        )}
      </Section>
    </Layout>
  )
}

export default IndexPage
