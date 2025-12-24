import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  text-align: center;
  color: ${({ theme }) => theme.colors.mutedText};
`

const Title = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const Description = styled.p`
  margin: 0;
`

type EmptyStateProps = {
  title: string
  description: string
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, description }) => (
  <Wrapper role="status" aria-live="polite">
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
)

export default EmptyState
