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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AKT Website`,
        short_name: `AKT 2020`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
        cache_busting_mode: `none`,
        lang: `de-DE`,
        display: `browser`,
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`**/favicon*`]
        }
      }
    },
    `gatsby-plugin-react-helmet`,
  ],
}
