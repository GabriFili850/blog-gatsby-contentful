import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const SiteWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
`

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 120px;
    height: 3px;
    background: ${({ theme }) => theme.colors.accent};
  }
`

const HeaderInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
`

const Brand = styled(Link)`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.03em;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 36px;
    height: 3px;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.accent};
  }
`

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
`

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.ink};
  font-weight: 600;
  padding: 0.35rem 0.85rem;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surfaceTint};
  border: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.surface};
  }
`

const Main = styled.main`
  flex: 1;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
  padding: ${({ theme }) => theme.spacing["2xl"]}
    ${({ theme }) => theme.spacing.lg}
    ${({ theme }) => theme.spacing["4xl"]};
`

const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceTint};
`

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 0.95rem;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: space-between;
`

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <SiteWrapper>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header>
        <HeaderInner>
          <Brand to="/">{data.site.siteMetadata.title}</Brand>
          <Nav aria-label="Primary">
            <NavLink to="/">Home</NavLink>
          </Nav>
        </HeaderInner>
      </Header>
      <Main id="main-content">{children}</Main>
      <Footer>
        <FooterInner>
          {data.site.siteMetadata.author
            ? `Written by ${data.site.siteMetadata.author}.`
            : "Contentful blog."}
        </FooterInner>
      </Footer>
    </SiteWrapper>
  )
}

export default Layout
