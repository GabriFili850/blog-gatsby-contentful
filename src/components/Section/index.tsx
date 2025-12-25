import styled from "styled-components"
import { BlogTitle } from "../BlogTitle"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  text-align: center;
  align-items: center;
`

export const SectionTitle = styled(BlogTitle)`
  font-size: 3rem;
  margin: 0;
`

export const SectionSubtitle = styled.p`
  margin: 0;
  max-width: 640px;
  color: ${({ theme }) => theme.colors.mutedText};
  font-size: 1.1rem;
`
