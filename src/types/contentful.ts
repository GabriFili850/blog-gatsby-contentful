import { IGatsbyImageData } from "gatsby-plugin-image"

export type ContentfulAsset = {
  gatsbyImageData: IGatsbyImageData
  description?: string | null
  title?: string | null
}

export type ContentfulBlogPostNode = {
  title?: string | null
  slug?: string | null
  updatedAt?: string | null
  topic?: string | null
  contentWithRichtext?: {
    raw?: string | null
  } | null
  image?: ContentfulAsset | null
}

export type ContentfulBlogPostEdge = {
  node: ContentfulBlogPostNode
}

export type Post = {
  title: string
  slug: string
  updatedAt: string | null
  topic: string | null
  image: ContentfulAsset | null
  richTextRaw: string | null
}
