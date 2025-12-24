import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout"
import {
  StyledBlogPostTitle,
  Content,
  PostLayout,
  RichText,
} from "./styles"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      ...BlogPostPageFields
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
      contentWithRichtext?: {
        raw: string
      } | null
      image?: {
        gatsbyImageData: IGatsbyImageData
        description?: string | null
        title?: string | null
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
  const imageAlt =
    contentfulBlogPost.image?.description ||
    contentfulBlogPost.image?.title ||
    contentfulBlogPost.title

  return (
    <Layout>
      <PostLayout>
        <StyledBlogPostTitle as="h1">
          {contentfulBlogPost.title}
        </StyledBlogPostTitle>
        {contentfulBlogPost.image?.gatsbyImageData && (
          <GatsbyImage
            image={contentfulBlogPost.image.gatsbyImageData}
            alt={imageAlt}
            loading="eager"
          />
        )}
        {contentfulBlogPost.content && (
          <Content>{contentfulBlogPost.content.content}</Content>
        )}
        {richTextDocument && (
          <RichText>
            {documentToReactComponents(richTextDocument, richTextOptions)}
          </RichText>
        )}
      </PostLayout>
    </Layout>
  )
}

export default BlogPost
