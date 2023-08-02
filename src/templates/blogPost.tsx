import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { StyledBlogPostTitle, Content } from "./styles"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      content {
        content
      }
      contentWithRichtext {
        raw
      }
      image {
        gatsbyImageData(
          width: 400
          height: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

interface BlogPostProps {
  data: {
    contentfulBlogPost: {
      title: string
      content: {
        content: string
      }
      contentWithRichtext: {
        raw: string
      }
      image: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: node => {
        if (node.content[0]) {
          return (
            <a href={node.data.uri} target="_blank" rel="noreferrer">
              {node.content[0].value}
            </a>
          )
        }
        return null
      },
    },
  }

  const imageData = getImage(data.contentfulBlogPost.image.gatsbyImageData)

  return (
    <div>
      <StyledBlogPostTitle>{data.contentfulBlogPost.title}</StyledBlogPostTitle>
      {imageData && (
        <GatsbyImage image={imageData} alt={data.contentfulBlogPost.title} />
      )}
      {data.contentfulBlogPost.content && (
        <Content>{data.contentfulBlogPost.content.content}</Content>
      )}
      {documentToReactComponents(
        JSON.parse(data.contentfulBlogPost.contentWithRichtext.raw),
        options
      )}
    </div>
  )
}

export default BlogPost
