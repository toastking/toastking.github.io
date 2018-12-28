/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // log markdown pages that are created
  // and create slugs so we can make the pages
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath:`posts` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
   }
}

const postTemplate = path.resolve(`./src/templates/post.js`); //Blog post component
// get the markdown pages and then create pages based on that
exports.createPages = ({graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`      
    {
      allMarkdownRemark (
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        ){
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }`).then(result => {
      //catch any errors
      if(result.errors){
        console.error(result.errors);
        reject(result.errors);
      }

      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: node.fields.slug,
          component: postTemplate, 
          context: { 
            // Data passed to context is available            
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
}