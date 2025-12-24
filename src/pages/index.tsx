import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import {
  Container,
  Title,
  BlogList,
  StyledBlogPostTitle,
  BlogItem,
} from "./styles"

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          image {
            gatsbyImageData(
              width: 299
              height: 250
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
    title: string
    slug: string
    image?: {
      gatsbyImageData: IGatsbyImageData
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
      <Title>Blog</Title>
      <BlogList>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <Link key={node.slug} to={`/blog/${node.slug}`}>
            <BlogItem>
              <StyledBlogPostTitle>{node.title}</StyledBlogPostTitle>
              {node.image?.gatsbyImageData && (
                <GatsbyImage
                  image={node.image.gatsbyImageData}
                  alt={node.title}
                />
              )}
            </BlogItem>
          </Link>
        ))}
      </BlogList>
    </Container>
  )
}

export default IndexPage
