import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceTint};
  text-align: center;
  color: ${({ theme }) => theme.colors.mutedText};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`

const Title = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const Description = styled.p`
  margin: 0;
  font-size: 1.05rem;
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
