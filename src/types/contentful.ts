import { IGatsbyImageData } from "gatsby-plugin-image"

export type ContentfulAsset = {
  gatsbyImageData: IGatsbyImageData
  description?: string | null
  title?: string | null
}

export type ContentfulTopicNode = {
  name?: string | null
  slug?: string | null
  description?: string | null
  color?: string | null
  featured?: boolean | null
  sortOrder?: number | null
}

export type ContentfulBlogPostNode = {
  title?: string | null
  slug?: string | null
  updatedAt?: string | null
  topics?: ContentfulTopicNode[] | null
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
  topics: ContentfulTopicNode[]
  image: ContentfulAsset | null
  richTextRaw: string | null
}
