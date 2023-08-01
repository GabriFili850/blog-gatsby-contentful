import styled from "styled-components"
import { BlogTitle } from "../components/BlogTitle"

export const Container = styled.div`
  padding-top: 1px;
  padding-right: 1px;
  padding-bottom: 50px;
  background-color: #d2b48c;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-family: courier, monospace;
  text-align: center;
  margin-bottom: 2rem;
`

export const BlogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;

  a {
    text-decoration: none;
  }
`

export const BlogItem = styled.div`
  width: 300px;
  height: 100%;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffefd5;
  color: darkgreen;
`

export const StyledBlogPostTitle = styled(BlogTitle)`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`
