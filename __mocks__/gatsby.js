const React = require("react")

module.exports = {
  ...jest.requireActual("gatsby"),
  graphql: jest.fn(),
  Link: ({ to, ...rest }) => React.createElement("a", { href: to, ...rest }),
  useStaticQuery: jest.fn(() => ({
    site: {
      siteMetadata: {
        title: "Test Site",
        author: "Test Author",
      },
    },
  })),
}
