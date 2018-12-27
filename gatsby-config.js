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
    //get markdown files for blog posts
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    // get markdown files in pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // handle markdown to html conversion
    {
      resolve: `gatsby-transformer-remark`,
      options:{
        plugins: [
          //handle images in markdown
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal:false
            },
          },
          `gatsby-remark-prismjs`,
        ]
      }
    },
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
