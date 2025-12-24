import styled from "styled-components"

export const BlogTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  line-height: 1.2;
`
