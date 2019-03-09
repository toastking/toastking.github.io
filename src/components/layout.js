import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

import Header from './header'

const Container = styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  background:#495459;
  overflow:none;
  overflow-y:scroll;
  -webkit-overflow-scrolling: touch;
`;

const Content = styled.div`
  padding:1em;
  /* padding to take the header into account */
  padding-top:4em;
  a, a:visited {
    color:white;
  }
`;

const Footer = styled.footer`
  font-weight:light;
  font-size:0.75em;
  text-align:center;
  position:absolute;
  bottom:0;
  width:100vw;
  background:#495459;
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
      </Container>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout