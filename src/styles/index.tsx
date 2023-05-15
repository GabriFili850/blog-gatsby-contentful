import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`

export const BlogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
`

export const BlogItem = styled.div`
  width: 300px;
  height: 100%;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const BlogTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
