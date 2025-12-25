import styled from "styled-components"
import { Link } from "gatsby"
import { BlogTitle } from "../components/BlogTitle"

export const StyledBlogPostTitle = styled(BlogTitle)`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const PostMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 0.95rem;
`

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.mutedText};
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const PostLayout = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

export const RichText = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: 1.05rem;

  h2,
  h3 {
    font-family: ${({ theme }) => theme.typography.heading};
    margin: ${({ theme }) => theme.spacing.lg} 0 0;
  }

  p {
    margin: 0;
  }

  a {
    font-weight: 600;
  }
`
