import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
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

interface BlogPost {
  node: {
    title: string
    slug: string
    image?: {
      gatsbyImageData: IGatsbyImageData
      description?: string | null
      title?: string | null
    }
  }
}

interface IndexPageProps {
  data: {
    allContentfulBlogPost: {
      edges: BlogPost[]
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Helmet>
          <title>Gatsby Contentful Project</title>
        </Helmet>
        <Title as="h1">Blog</Title>
        <BlogList>
          {data.allContentfulBlogPost.edges.map(({ node }) => {
            const imageAlt =
              node.image?.description || node.image?.title || node.title
            return (
              <BlogLink key={node.slug} to={`/blog/${node.slug}`}>
                <BlogItem>
                  <StyledBlogPostTitle as="h2">
                    {node.title}
                  </StyledBlogPostTitle>
                  {node.image?.gatsbyImageData && (
                    <GatsbyImage
                      image={node.image.gatsbyImageData}
                      alt={imageAlt}
                      loading="lazy"
                    />
                  )}
                </BlogItem>
              </BlogLink>
            )
          })}
        </BlogList>
      </Container>
    </Layout>
  )
}

export default IndexPage
