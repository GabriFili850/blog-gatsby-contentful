import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import EmptyState from "../components/EmptyState"
import Layout from "../components/Layout"
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
} from "../components/Section"
import { getPostImageAlt, normalizeContentfulPosts } from "../data/contentful"
import { ContentfulBlogPostEdge } from "../types/contentful"
import {
  BlogList,
  StyledBlogPostTitle,
  BlogItem,
  BlogLink,
  BlogItemFooter,
  SearchBar,
  SearchIcon,
  SearchInput,
  SearchMeta,
} from "./styles"

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          ...BlogPostListFields
        }
      }
    }
  }
`

interface IndexPageProps {
  data: {
    allContentfulBlogPost: {
      edges: ContentfulBlogPostEdge[]
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const posts = normalizeContentfulPosts(data.allContentfulBlogPost.edges)
  const [query, setQuery] = React.useState("")
  const trimmedQuery = query.trim()
  const normalizedQuery = trimmedQuery.toLowerCase()
  const visiblePosts = normalizedQuery
    ? posts.filter(post => post.title.toLowerCase().includes(normalizedQuery))
    : posts
  const searchStatus = normalizedQuery
    ? `${visiblePosts.length} result${
        visiblePosts.length === 1 ? "" : "s"
      } for "${trimmedQuery}".`
    : null

  return (
    <Layout>
      <Section aria-labelledby="blog-title">
        <Helmet>
          <title>Signal & Ink</title>
        </Helmet>
        <SectionHeader>
          <SectionTitle as="h1" id="blog-title">
            Journal
          </SectionTitle>
          <SectionSubtitle>
            Field notes, studio drafts, and launch-ready ideas from the stack.
          </SectionSubtitle>
          <SearchBar>
            <SearchIcon aria-hidden="true">Search</SearchIcon>
            <SearchInput
              aria-label="Search blog posts by title"
              id="blog-search"
              type="search"
              placeholder="Search posts by title"
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
          </SearchBar>
          {searchStatus && <SearchMeta>{searchStatus}</SearchMeta>}
        </SectionHeader>
        {visiblePosts.length === 0 ? (
          query ? (
            <EmptyState
              title="No results"
              description="Try a different title or clear the search."
            />
          ) : (
            <EmptyState
              title="No posts yet"
              description="Publish a Contentful post to see it here."
            />
          )
        ) : (
          <BlogList>
            {visiblePosts.map(post => (
              <BlogLink key={post.slug} to={`/blog/${post.slug}`}>
                <BlogItem>
                  <StyledBlogPostTitle as="h2">
                    {post.title}
                  </StyledBlogPostTitle>
                  {post.image?.gatsbyImageData && (
                    <GatsbyImage
                      image={post.image.gatsbyImageData}
                      alt={getPostImageAlt(post)}
                      loading="lazy"
                    />
                  )}
                  <BlogItemFooter>Read article -></BlogItemFooter>
                </BlogItem>
              </BlogLink>
            ))}
          </BlogList>
        )}
      </Section>
    </Layout>
  )
}

export default IndexPage
