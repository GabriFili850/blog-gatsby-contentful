import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import EmptyState from "../components/EmptyState"
import Layout from "../components/Layout"
import { getPostImageAlt, normalizeContentfulPost } from "../data/contentful"
import { ContentfulBlogPostNode } from "../types/contentful"
import {
  StyledBlogPostTitle,
  PostHeader,
  PostMeta,
  BackLink,
  PostLayout,
  PostMedia,
  TopicRow,
  TopicBadge,
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
    contentfulBlogPost: ContentfulBlogPostNode
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
  const post = normalizeContentfulPost(data.contentfulBlogPost)
  const richTextRaw = post.richTextRaw
  const richTextDocument = richTextRaw ? JSON.parse(richTextRaw) : null
  const hasBodyContent = Boolean(richTextDocument)

  return (
    <Layout>
      <PostLayout>
        <PostHeader>
          <BackLink to="/">Back to blog</BackLink>
          <PostMeta>Studio notes</PostMeta>
          <StyledBlogPostTitle as="h1">{post.title}</StyledBlogPostTitle>
          {post.topics.length > 0 && (
            <TopicRow>
              {post.topics.map(topic => (
                <TopicBadge key={topic.slug || topic.name}>
                  {topic.name}
                </TopicBadge>
              ))}
            </TopicRow>
          )}
        </PostHeader>
        {post.image?.gatsbyImageData && (
          <PostMedia>
            <GatsbyImage
              image={post.image.gatsbyImageData}
              alt={getPostImageAlt(post)}
              loading="eager"
            />
          </PostMedia>
        )}
        {richTextDocument && (
          <RichText>
            {documentToReactComponents(richTextDocument, richTextOptions)}
          </RichText>
        )}
        {!hasBodyContent && (
          <EmptyState
            title="No content yet"
            description="This post is still being written."
          />
        )}
      </PostLayout>
    </Layout>
  )
}

export default BlogPost
