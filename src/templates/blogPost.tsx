import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image"
import { BlogTitle, Content } from "./styles"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      content {
        content
      }
      image {
        gatsbyImageData(
          width: 400
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
      image: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  return (
    <div>
      <BlogTitle>{data.contentfulBlogPost.title}</BlogTitle>
      <GatsbyImage
        image={getImage(data.contentfulBlogPost.image) as IGatsbyImageData}
        alt={data.contentfulBlogPost.title}
      />
      <Content>{data.contentfulBlogPost.content.content}</Content>
    </div>
  )
}

export default BlogPost
