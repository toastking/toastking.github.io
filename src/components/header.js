import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";

//make divs to style stuff
const HeaderContainer = styled.div`
  display:flex;
  flex-direction: row;
  width:100vw;
  background:rgba(24, 24, 24);
  color:white;

  /* Override the font */
  font-weight:bold;
  font-family: 'Roboto Mono', 'sans-serif';


  /* Make it above all the other content
  and make it partially transparent */
  height:4em;
  position:absolute;
  opacity:0.8;
  z-index: 999;

  a {
    text-decoration:none;
    color:white;
  }

  a:visited {
    color:white;
  }

  a:hover {
    color:#cccccc;
  }
`;

const Logo = styled.div`
  display:flex;
  align-items:center;
  margin-right:auto;
  margin-left:.5em;
  font-size:2em;
  opacity:1;
`;

const Menu = styled.div`
  display:flex;
  align-items:center;
  margin-right:1em;
  margin-left:auto;
  color:white;
  font-size:1.25em;
  opacity:1;
`;

const MenuText = styled.p`
  margin-top:auto;
  margin-bottom:auto;
`;

const MenuItem = (props)=>(
  <MenuText><Link to={props.url}> {props.text} </Link></MenuText>
);

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Logo>
      <MenuItem url="/" text={siteTitle}/>
    </Logo>

    <Menu>
      <MenuItem url="/about" text="About"/>
    </Menu>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
