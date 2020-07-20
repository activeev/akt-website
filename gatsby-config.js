/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "AKTive Ahoi! | AKT 2021",
    author: "Active Bremen e. V.",
    // image: "/yellow-metal-design-decoration.jpg",
    // siteUrl: "https://www.morganbaker.dev",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
