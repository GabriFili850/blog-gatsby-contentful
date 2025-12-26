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

const Main = styled.main`
  flex: 1;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
  padding: ${({ theme }) => theme.spacing["2xl"]}
    ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing["4xl"]};
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

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const FooterTitle = styled.span`
  font-family: ${({ theme }) => theme.typography.heading};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.8rem;
`

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.mutedText};
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
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
        </HeaderInner>
      </Header>
      <Main id="main-content">{children}</Main>
      <Footer>
        <FooterInner>
          <FooterColumn>
            <FooterTitle>Signal & Ink</FooterTitle>
            <span>
              Essays, frameworks, and product notes from{" "}
              {data.site.siteMetadata.author || "the studio"}.
            </span>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Explore</FooterTitle>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/#blog-title">Journal</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Contact</FooterTitle>
            <FooterLink href="mailto:hello@example.com">
              hello@example.com
            </FooterLink>
          </FooterColumn>
        </FooterInner>
      </Footer>
    </SiteWrapper>
  )
}

export default Layout
