// src/pages/index.tsx
import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { Container, Title, BlogList, BlogTitle, BlogItem } from "./styles"

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          content {
            content
          }
          image {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

interface BlogPost {
  node: {
    content: { content: string }
    title: string
    slug: string
    image: {
      gatsbyImageData: any
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
    <Container>
      <Helmet>
        <title>Gatsby Contentful Project</title>
      </Helmet>
      <Title>Blog Posts</Title>
      <BlogList>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <BlogItem key={node.slug}>
            <BlogTitle>{node.title}</BlogTitle>
            {node.image && (
              <GatsbyImage
                image={getImage(node.image) as IGatsbyImageData}
                alt={node.title}
              />
            )}
            {node.content && <p>{node.content.content}</p>}
          </BlogItem>
        ))}
      </BlogList>
    </Container>
  )
}

export default IndexPage
