import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  SiteWrapper,
  Header,
  HeaderInner,
  Brand,
  Main,
  Footer,
  FooterInner,
  FooterColumn,
  FooterTitle,
  FooterLink,
} from "./styles"

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
