import React from 'react';
import { Link,graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Container for each post excerpt
const PostCard = styled.div`
  border-bottom: .05em solid #eeeeee;
  padding:2em;
  margin:1em;
  margin-top:0;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;

  a {
    text-decoration:none;
    color:white;
  }

  a:hover{
    color:#cccccc;
  }
`;

const CardContainer = styled.div`
  display:flex;
  flex-direction:column;

  @media (min-width: 1100px) {
    margin-right:15vw;
    margin-left:15vw;
  }

  @media (min-width: 800px) and (max-width: 1100px) {
    margin-right:15vw;
    margin-left:15vw;
  }

  @media (min-width: 200px) and (max-width: 400px) {
    margin-right: 5vw;
    margin-left: 5vw;
  }
`; 


const DateText = styled.div`
  font-weight:lighter;
  font-size:0.75em;
  margin-top:auto;
  margin-bottom:0;
`;

const ReadMore = styled.p`
  font-weight:300;
`;

/**
 * Card to display blog posts
 * @param {*} props 
 */
const FrontPagePost = (props)=>{
  let node = props.item;
  return(
    <PostCard>
      <Link to={node.fields.slug}><h3> {node.frontmatter.title} </h3></Link>
      <p> {node.excerpt} </p> 
      <Link to={node.fields.slug}><ReadMore>Read More...</ReadMore></Link>
      <DateText>{node.frontmatter.date}</DateText>
    </PostCard>
  );
}

const AccountDiv = styled.div`
  background:rgb(24, 24, 24);
  padding:1em;
  margin-top:1em;
  border-radius:0.25em;
  color:white;

  /* desktop */
  @media (min-width: 701px){ 
    flex-direction:row;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  /* mobile devices and small screens */
  @media (max-width: 700px){ 
    display:none;
  }
`;

const AccountButton = styled.div`
  border:none;
  border-radius:.1em;
  background:transparent;
  font-size:5em;
  padding:.5em;
  cursor:pointer;
  text-align:center;

  :hover {
    background:#4f4f4f;
  }

  a {
    text-decoration:none;
  }
`;

const AccountLabel = styled.p`
  font-size:0.25em;
  font-weight:lighter;
`;

/**
 * Div with links to my various social media accounts
 * @param {*} props 
 */
const AccountLinks = (props) => (
  <AccountDiv>
    <AccountButton>
      <a href="https://twitter.com/delsig">
        <FontAwesomeIcon icon={faTwitter} />
        <AccountLabel>@delsig</AccountLabel>
      </a>
    </AccountButton>
    <AccountButton>
      <a href="https://github.com/toastking">
        <FontAwesomeIcon icon={faGithub} />
        <AccountLabel>@toastking</AccountLabel>
      </a>
    </AccountButton>
    <AccountButton>
      <a href="https://www.linkedin.com/in/mattdelsig/">
        <FontAwesomeIcon icon={faLinkedin} />
        <AccountLabel>LinkedIn</AccountLabel>
      </a>
    </AccountButton>
  </AccountDiv>
);

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Matthew Del Signore" keywords={[`coder`, `portfolio`, `frontend`, `react`, `gatsby`]} />
    <AccountLinks/>
    <CardContainer>
      {data.allMarkdownRemark.edges.map(({node})=>(
        <FrontPagePost item={node} key={node.id}/>
      ))}
    </CardContainer>
  </Layout>
)

 export const query = graphql`
  query {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC },
      limit: 50,
      # only get the posts, not the markdown pages
      filter:{
          frontmatter:{
            layout:{ eq:"post" }
          }
        }
      ){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields{
            slug
          }
          excerpt(pruneLength: 600)
        }
      }
    }
  }
`

export default IndexPage
