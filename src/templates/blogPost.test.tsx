import React from "react"
import { render, screen } from "@testing-library/react"
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
    render(<BlogPost data={mockData} />)
    expect(screen.getByText("Hello world")).toBeTruthy()
    expect(screen.getByText("Plain content")).toBeTruthy()
  })
})
