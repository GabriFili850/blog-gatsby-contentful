import styled from "styled-components"
import { BlogTitle } from "../BlogTitle"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["2xl"]};
`

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  text-align: left;
  align-items: flex-start;
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.md};

  &::after {
    content: "";
    width: 64px;
    height: 3px;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.accent};
  }
`

export const SectionTitle = styled(BlogTitle)`
  font-size: clamp(2.6rem, 4vw, 3.4rem);
  margin: 0;
  letter-spacing: -0.03em;
`

export const SectionSubtitle = styled.p`
  margin: 0;
  max-width: 560px;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 1.15rem;
`
