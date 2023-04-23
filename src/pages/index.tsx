// src/pages/index.tsx
import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          image {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
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
    <div>
      <Helmet>
        <title>Gatsby Contentful Project</title>
      </Helmet>
      <h1>Blog Posts</h1>
      <ul>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <li key={node.slug}>
            <h2>{node.title}</h2>
            {node.image && (
              <GatsbyImage
                image={getImage(node.image) as IGatsbyImageData}
                alt={node.title}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IndexPage
