import styled from "styled-components"

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceTint};
  text-align: center;
  color: ${({ theme }) => theme.colors.mutedText};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`

export const Title = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

export const Description = styled.p`
  margin: 0;
  font-size: 1.05rem;
`
