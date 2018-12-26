import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";

//make divs to style stuff
const HeaderContainer = styled.div`
  display:flex;
  flex-direction: row;
  min-height:5vh;
  width:100vw;
  background:rgb(24, 24, 24);
  color:white;
  font-weight:bold;

  a {
    text-decoration:none;
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
  margin-left:1em;
`;

const Menu = styled.div`
  display:flex;
  align-items:center;
  margin-right:1em;
  margin-left:auto;
  color:white;
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
