import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';


const PostDate = styled.h3`
  font-weight:300;
`;
// Main blog post Component
export default ({data}) => {
  let post = data.markdownRemark;
  return (
    <Layout>
      <div className="mattdelsig-post">
        <h1>{post.frontmatter.title}</h1>
        <PostDate>{post.frontmatter.date}</PostDate>
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
      date(formatString: "MMMM DD, YYYY")
    }
  }
}
`