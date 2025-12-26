import styled from "styled-components"
import { Link } from "gatsby"
import { BlogTitle } from "../components/BlogTitle"

export const StyledBlogPostTitle = styled(BlogTitle)`
  font-size: clamp(2.2rem, 3vw, 2.8rem);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  letter-spacing: -0.03em;
`

export const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const PostMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-family: ${({ theme }) => theme.typography.heading};
`

export const TopicRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const TopicBadge = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surfaceTint};
  color: ${({ theme }) => theme.colors.mutedText};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.typography.heading};
`

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.mutedText};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.85rem;
  font-family: ${({ theme }) => theme.typography.heading};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const PostLayout = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: ${({ theme }) => theme.layout.textWidth};
  margin: 0 auto;
`

export const PostMedia = styled.div`
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const RichText = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: 1.08rem;
  line-height: 1.8;

  h2,
  h3 {
    font-family: ${({ theme }) => theme.typography.heading};
    margin: ${({ theme }) => theme.spacing.lg} 0 0;
  }

  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding-left: ${({ theme }) => theme.spacing.lg};
  }

  blockquote {
    margin: 0;
    padding-left: ${({ theme }) => theme.spacing.lg};
    border-left: 3px solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.mutedText};
  }

  a {
    font-weight: 600;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }
`
