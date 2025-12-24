import styled from "styled-components"
import { Link } from "gatsby"
import { BlogTitle } from "../components/BlogTitle"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`

export const Title = styled(BlogTitle)`
  font-size: 3rem;
  text-align: center;
`

export const BlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`

export const BlogLink = styled(Link)`
  display: block;
  color: inherit;
`

export const BlogItem = styled.article`
  height: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${BlogLink}:hover & {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lift};
  }
`

export const StyledBlogPostTitle = styled(BlogTitle)`
  font-size: 1.4rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`
