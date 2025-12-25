import styled from "styled-components"
import { Link } from "gatsby"
import { BlogTitle } from "../components/BlogTitle"

export const BlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`

export const SearchBar = styled.div`
  width: 100%;
  max-width: 420px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) =>
    theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedText};
  }
`

export const SearchMeta = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 0.95rem;
`

export const BlogLink = styled(Link)`
  display: block;
  color: inherit;
`

export const BlogItem = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
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

  ${BlogLink}:focus-visible & {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.focus};
  }
`


export const StyledBlogPostTitle = styled(BlogTitle)`
  font-size: 1.4rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const BlogItemFooter = styled.div`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.mutedText};
`
