import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

import Header from './header'
import './layout.css'

const Container = styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
`;

const Content = styled.div`
  flex:1 1 auto;
  overflow-y:auto;
  padding:1em;
`;

const Footer = styled.footer`
  font-weight:light;
  font-size:0.75em;
  text-align:center;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          {children}
        </Content>
        <Footer>
          © Matthew Del Signore 2018, Built with <a href="www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Container>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
