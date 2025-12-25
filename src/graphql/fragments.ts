import { graphql } from "gatsby"

export const blogPostListFields = graphql`
  fragment BlogPostListFields on ContentfulBlogPost {
    title
    slug
    image {
      description
      title
      gatsbyImageData(
        width: 299
        height: 250
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
`

export const blogPostPageFields = graphql`
  fragment BlogPostPageFields on ContentfulBlogPost {
    title
    contentWithRichtext {
      raw
    }
    image {
      description
      title
      gatsbyImageData(
        width: 400
        height: 300
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
`
