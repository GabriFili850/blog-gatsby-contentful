import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const SiteWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
`

const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
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
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
`

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
`

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.mutedText};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const Main = styled.main`
  flex: 1;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg}
    ${({ theme }) => theme.spacing["3xl"]};
`

const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`

const FooterInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 0.95rem;
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
