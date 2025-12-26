import React from "react"
import { Wrapper, Title, Description } from "./styles"

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
