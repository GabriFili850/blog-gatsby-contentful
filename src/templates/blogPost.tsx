import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { INLINES } from "@contentful/rich-text-types"
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
      image?: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const richTextOptions = {
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

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const { contentfulBlogPost } = data
  const richTextRaw = contentfulBlogPost.contentWithRichtext?.raw
  const richTextDocument = richTextRaw ? JSON.parse(richTextRaw) : null

  return (
    <div>
      <StyledBlogPostTitle>{contentfulBlogPost.title}</StyledBlogPostTitle>
      {contentfulBlogPost.image?.gatsbyImageData && (
        <GatsbyImage
          image={contentfulBlogPost.image.gatsbyImageData}
          alt={contentfulBlogPost.title}
        />
      )}
      {contentfulBlogPost.content && (
        <Content>{contentfulBlogPost.content.content}</Content>
      )}
      {richTextDocument &&
        documentToReactComponents(richTextDocument, richTextOptions)}
    </div>
  )
}

export default BlogPost
