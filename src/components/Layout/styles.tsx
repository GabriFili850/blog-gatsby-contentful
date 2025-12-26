import styled from "styled-components"
import { Link } from "gatsby"

export const SiteWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
`

export const Header = styled.header`
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

export const HeaderInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
`

export const Brand = styled(Link)`
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

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

export const TopicButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceTint};
  color: ${({ theme }) => theme.colors.ink};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 0.35rem 0.85rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.typography.heading};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.surface};
  }
`

export const TopicMenu = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing.lg};
  top: calc(100% + 0.75rem);
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.lift};
  min-width: 220px;
  padding: ${({ theme }) => theme.spacing.sm};
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  z-index: 20;
`

export const TopicLink = styled(Link)`
  padding: 0.45rem 0.65rem;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.surfaceTint};
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const TopicMenuTitle = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.mutedText};
  font-family: ${({ theme }) => theme.typography.heading};
  padding: 0.35rem 0.65rem;
`

export const Main = styled.main`
  flex: 1;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
  padding: ${({ theme }) => theme.spacing["2xl"]}
    ${({ theme }) => theme.spacing.lg}
    ${({ theme }) => theme.spacing["4xl"]};
`

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceTint};
`

export const FooterInner = styled.div`
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

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const FooterTitle = styled.span`
  font-family: ${({ theme }) => theme.typography.heading};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.8rem;
`

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.mutedText};
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`
