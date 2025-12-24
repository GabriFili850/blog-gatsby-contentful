const React = require("react")
const { ThemeProvider } = require("styled-components")
const { GlobalStyle } = require("./src/styles/globalStyles")
const { theme } = require("./src/styles/theme")

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

exports.wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
