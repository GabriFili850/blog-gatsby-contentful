require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "Gatsby Contentful Project",
    author: "Your Name",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
