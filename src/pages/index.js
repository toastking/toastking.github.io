import React from 'react';
import { Link,graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import styled from 'styled-components';

// Container for each post excerpt
const PostCard = styled.div`
  border: 1px solid #cccccc;
  box-shadow: 5px 5px 5px #cccccc;
  padding:2em;
  margin:1em;
  width:30em;

  a {
    text-decoration:none;
    color:black;
  }

  a:hover{
    color:#cccccc;
  }
`;

const CardContainer = styled.div`
  display:flex;
  flex-flow:row;
`; 

const DateText = styled.div`
  font-weight:light;
`;

const FrontPagePost = (props)=>{
  let node = props.item;
  return(
    <PostCard>
      <Link to={node.fields.slug}><h3> {node.frontmatter.title} </h3></Link>
      <p>{node.excerpt}</p>
    </PostCard>
  );
}

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Matthew Del Signore" keywords={[`coder`, `portfolio`, `frontend`, `react`, `gatsby`]} />
    <CardContainer>
      {data.allMarkdownRemark.edges.map(({node})=>(
        <FrontPagePost item={node} key={node.id}/>
      ))}
    </CardContainer>
  </Layout>
)

 export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
