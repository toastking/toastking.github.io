module.exports = {
  siteMetadata: {
    title: `Matt Del Signore`,
    description: `Personal website of software developer Matt Del Signore`,
    author: `@delsig`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`, 
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve:`gatsby-plugin-typography`,
      options:{
        pathToConfigModule:`src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matt Del Signore's blog`,
        short_name: `mattdelsig`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
