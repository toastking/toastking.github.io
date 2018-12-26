import React from 'react'
import { Link,graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

function FrontPagePost(props){
  var node = props.item;
  return(
    <div className="mattdelsig-postcard">
      <Link to={node.fields.slug}>
      <h3>
        {node.frontmatter.title}{" "}
        <span>
          — {node.frontmatter.date}
        </span>
      </h3>
      </Link>
      <p>{node.excerpt}</p>
    </div>
  );
}

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {data.allMarkdownRemark.edges.map(({node})=>(
      <FrontPagePost item={node} key={node.id}/>
    ))}
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
