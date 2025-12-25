import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Literata:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap");

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    color-scheme: light;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.body};
    font-size: 17px;
    line-height: 1.7;
    background: ${({ theme }) => theme.colors.backgroundAlt};
    color: ${({ theme }) => theme.colors.text};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body::before {
    content: "";
    position: fixed;
    inset: 0;
    background:
      radial-gradient(circle at 20% 10%, rgba(249, 115, 22, 0.18), transparent 45%),
      radial-gradient(circle at 80% 0%, rgba(15, 23, 42, 0.18), transparent 55%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.6), transparent 35%);
    pointer-events: none;
    z-index: -1;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accentHover};
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
    border-radius: 4px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background: rgba(249, 115, 22, 0.25);
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  .skip-link {
    position: absolute;
    left: -999px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .skip-link:focus {
    position: fixed;
    left: ${({ theme }) => theme.spacing.lg};
    top: ${({ theme }) => theme.spacing.lg};
    width: auto;
    height: auto;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.radii.sm};
    box-shadow: ${({ theme }) => theme.shadows.soft};
    z-index: 1000;
  }
`
