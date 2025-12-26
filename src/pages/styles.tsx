import styled from "styled-components"
import { Link } from "gatsby"
import { BlogTitle } from "../components/BlogTitle"

export const BlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${({ theme }) => theme.spacing["2xl"]};
`

export const PageGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: ${({ theme }) => theme.spacing["2xl"]};
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const Sidebar = styled.aside`
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  @media (max-width: 980px) {
    position: static;
  }
`

export const SidebarTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 1.1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedText};
`

export const SidebarList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`

export const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

export const SidebarLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-family: ${({ theme }) => theme.typography.heading};
  letter-spacing: -0.01em;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const SidebarMeta = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.mutedText};
`

export const SearchBar = styled.div`
  width: 100%;
  max-width: 480px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) =>
    theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`

export const SearchIcon = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.mutedText};
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-family: ${({ theme }) => theme.typography.heading};
`

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.05rem;
  font-family: ${({ theme }) => theme.typography.heading};
  letter-spacing: -0.01em;
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
  font-family: ${({ theme }) => theme.typography.heading};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`

export const BlogLink = styled(Link)`
  display: block;
  color: inherit;
`

export const BlogItem = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  height: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 0%,
      ${({ theme }) => theme.colors.cardHighlight} 100%
    );
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
    z-index: 0;
  }

  ${BlogLink}:hover & {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lift};
  }

  ${BlogLink}:focus-visible & {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.focus};
  }

  ${BlogLink}:hover &::before {
    opacity: 1;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`


export const StyledBlogPostTitle = styled(BlogTitle)`
  font-size: 1.4rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  ${BlogLink}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const BlogItemFooter = styled.div`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.typography.heading};

  ${BlogLink}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
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
