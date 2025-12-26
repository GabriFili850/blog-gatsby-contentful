import {
  ContentfulBlogPostEdge,
  ContentfulBlogPostNode,
  Post,
} from "../types/contentful"

export const normalizeContentfulPost = (
  node: ContentfulBlogPostNode
): Post => ({
  title: node.title ?? "Untitled post",
  slug: node.slug ?? "",
  updatedAt: node.updatedAt ?? null,
  topic: node.topic ?? null,
  image: node.image ?? null,
  richTextRaw: node.contentWithRichtext?.raw ?? null,
})

export const normalizeContentfulPosts = (
  edges: ContentfulBlogPostEdge[] = []
): Post[] => edges
  .map(edge => normalizeContentfulPost(edge.node))
  .filter(post => post.slug)

export const getPostImageAlt = (post: Post): string =>
  post.image?.description || post.image?.title || post.title
