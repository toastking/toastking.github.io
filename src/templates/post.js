import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

// Main blog post Component
export default ({data}) => {
  let post = data.markdownRemark;
  return (
    <Layout>
      <div className="mattdelsig-post">
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.date}</h3>
        <div className="mattdelsig-post-body" dangerouslySetInnerHTML={{ __html: post.html}}>
        </div>
      </div>
    </Layout>
  );
}

// Get the html and titles from the markdown content
export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: {
    slug: {
      eq: $slug
    }
  }) 
  {
    html
    frontmatter {
      title
      date
    }
  }
}
`