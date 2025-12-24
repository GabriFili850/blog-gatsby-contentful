import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import BlogPost from "./blogPost"

const mockData = {
  contentfulBlogPost: {
    title: "Hello world",
    slug: "hello-world",
    content: {
      content: "Plain content",
    },
    contentWithRichtext: null,
    image: null,
  },
}

describe("BlogPost template", () => {
  it("renders the post title and content", () => {
    render(
      <ThemeProvider theme={theme}>
        <BlogPost data={mockData} />
      </ThemeProvider>
    )
    expect(screen.getByText("Hello world")).toBeTruthy()
    expect(screen.getByText("Plain content")).toBeTruthy()
  })
})
