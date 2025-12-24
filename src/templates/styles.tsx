import styled from "styled-components"
import { BlogTitle } from "../components/BlogTitle"

export const StyledBlogPostTitle = styled(BlogTitle)`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export const Content = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.spacing.md};
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
