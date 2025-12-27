import * as React from "react"
import { graphql } from "gatsby"
import { useLocation } from "@reach/router"
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
  filterPosts,
  getLatestPosts,
  normalizeQuery,
} from "../utils/posts"
import { TopicRow, TopicBadge } from "../components/TopicBadge"
import {
  BlogList,
  StyledBlogPostTitle,
  BlogItem,
  BlogLink,
  BlogItemFooter,
  PageGrid,
  Sidebar,
  SidebarTitle,
  SidebarList,
  SidebarItem,
  SidebarLink,
  SidebarMeta,
  SearchBar,
  SearchIcon,
  SearchInput,
  SearchMeta,
  FilterLink,
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
  const location = useLocation()
  const posts = React.useMemo(
    () => normalizeContentfulPosts(data.allContentfulBlogPost.edges),
    [data.allContentfulBlogPost.edges]
  )
  const [query, setQuery] = React.useState("")
  const { trimmed: trimmedQuery, normalized: normalizedQuery } =
    React.useMemo(() => normalizeQuery(query), [query])
  const topicValue = React.useMemo(() => {
    if (!location.search) {
      return ""
    }
    const params = new URLSearchParams(location.search)
    return params.get("topic") || ""
  }, [location.search])

  const visiblePosts = React.useMemo(
    () => filterPosts(posts, normalizedQuery, topicValue),
    [posts, normalizedQuery, topicValue]
  )

  const sidebarPosts = React.useMemo(
    () => getLatestPosts(posts, 3),
    [posts]
  )

  const searchStatus = React.useMemo(() => {
    if (normalizedQuery) {
      return `${visiblePosts.length} result${
        visiblePosts.length === 1 ? "" : "s"
      } for "${trimmedQuery}".`
    }

    if (topicValue) {
      return `${visiblePosts.length} post${
        visiblePosts.length === 1 ? "" : "s"
      } in this topic.`
    }

    return null
  }, [normalizedQuery, visiblePosts.length, trimmedQuery, topicValue])

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
          {searchStatus && (
            <SearchMeta>
              {searchStatus}
              {topicValue && (
                <FilterLink href="/">Clear filter</FilterLink>
              )}
            </SearchMeta>
          )}
        </SectionHeader>
        <PageGrid>
          <div>
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
                      {post.topic && (
                        <TopicRow>
                          <TopicBadge>{post.topic}</TopicBadge>
                        </TopicRow>
                      )}
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
          </div>
          <Sidebar aria-label="Featured posts">
            <SidebarTitle>Featured</SidebarTitle>
            <SidebarList>
              {sidebarPosts.map(post => (
                <SidebarItem key={post.slug}>
                  <SidebarLink to={`/blog/${post.slug}`}>
                    {post.title}
                  </SidebarLink>
                  <SidebarMeta>Read in journal</SidebarMeta>
                </SidebarItem>
              ))}
            </SidebarList>
          </Sidebar>
        </PageGrid>
      </Section>
    </Layout>
  )
}

export default IndexPage
