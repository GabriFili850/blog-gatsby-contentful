import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image"
import { BlogTitle } from "../styles"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
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
  const options = {
    renderNode: {},
  }

  return (
    <div>
      <BlogTitle>{data.contentfulBlogPost.title}</BlogTitle>
      <GatsbyImage
        image={getImage(data.contentfulBlogPost.image) as IGatsbyImageData}
        alt={data.contentfulBlogPost.title}
      />
      <p>{data.contentfulBlogPost.content.content}</p>
    </div>
  )
}

export default BlogPost
