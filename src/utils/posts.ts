import { Post } from "../types/contentful"

export const normalizeQuery = (
  value: string
): { trimmed: string; normalized: string } => {
  const trimmed = value.trim()
  return { trimmed, normalized: trimmed.toLowerCase() }
}

export const filterPosts = (
  posts: Post[],
  normalizedQuery: string,
  topic: string
): Post[] => {
  return posts.filter(post => {
    if (topic && post.topic !== topic) {
      return false
    }

    return normalizedQuery
      ? post.title.toLowerCase().includes(normalizedQuery)
      : true
  })
}

export const getLatestPosts = (posts: Post[], count: number): Post[] => {
  return [...posts]
    .sort((a, b) => {
      const aTime = a.updatedAt ? Date.parse(a.updatedAt) : 0
      const bTime = b.updatedAt ? Date.parse(b.updatedAt) : 0
      return bTime - aTime
    })
    .slice(0, count)
}
