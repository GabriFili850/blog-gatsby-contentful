import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  SiteWrapper,
  Header,
  HeaderInner,
  Brand,
  Nav,
  TopicButton,
  TopicMenu,
  TopicMenuTitle,
  TopicLink,
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
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement | null>(null)
  const buttonRef = React.useRef<HTMLButtonElement | null>(null)

  React.useEffect(() => {
    const handleClick = event => {
      if (
        menuRef.current?.contains(event.target) ||
        buttonRef.current?.contains(event.target)
      ) {
        return
      }
      setIsOpen(false)
    }

    const handleKeyDown = event => {
      if (event.key === "Escape") {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <SiteWrapper>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header>
        <HeaderInner>
          <Brand to="/">{data.site.siteMetadata.title}</Brand>
          <Nav aria-label="Primary">
            <TopicButton
              ref={buttonRef}
              type="button"
              aria-haspopup="menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(open => !open)}
            >
              Topics
            </TopicButton>
          </Nav>
        </HeaderInner>
        {isOpen && (
          <TopicMenu ref={menuRef} role="menu" aria-label="Topics">
            <TopicMenuTitle>Browse topics</TopicMenuTitle>
            <TopicLink to="/" role="menuitem">
              All topics
            </TopicLink>
            {[
              "Yoga",
              "Time management",
              "Cooking",
              "Astronomy",
              "Eco-friendly living",
              "Mindfulness",
              "AI",
              "Crypto",
              "Software development",
              "Product strategy",
              "UX design",
              "Leadership",
              "Remote work",
              "Personal finance",
              "Health & nutrition",
              "Entrepreneurship",
              "Marketing",
              "Writing",
              "Psychology",
              "Habit building",
              "Learning",
              "Sustainability",
              "Travel",
              "Photography",
              "Data science",
              "Cybersecurity",
              "Career growth",
              "Startups",
              "Philosophy",
            ].map(topic => (
              <TopicLink
                key={topic}
                to={`/?topic=${encodeURIComponent(topic)}`}
                role="menuitem"
              >
                {topic}
              </TopicLink>
            ))}
          </TopicMenu>
        )}
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
