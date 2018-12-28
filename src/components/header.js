import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretUp } from '@fortawesome/free-solid-svg-icons'

//make divs to style stuff
const HeaderContainer = styled.div`
  display:flex;
  width:100vw;
  padding:.25em;
  background:rgba(24, 24, 24);
  color:white;

  /* Override the font */
  font-weight:bold;
  font-family: 'Roboto Mono', 'sans-serif';
  vertical-align:middle;

  /* Make it above all the other content
  and make it partially transparent */
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

 /* desktop */
  @media (min-width: 701px){ 
    flex-direction:row;
    align-items:center;
    min-height:4em;
  }

  /* mobile devices and small screens */
  @media (max-width: 700px){ 
    flex-direction:column;
    align-items:stretch;
    min-height:3em;
  }
`;

const Logo = styled.div`
  display:flex;
  flex-direction:row;
  margin-right:auto;
  margin-left:.1em;
  font-size:1.75em;
  opacity:1;

  /* mobile devices and small screens */
  @media (max-width: 700px){ 
    width:100%;
  }
`;

const MenuDiv = styled.div`
  color:white;
  font-size:1.25em;
  opacity:1;
  text-align:center;

  /* desktop */
  @media (min-width: 701px){ 
    flex-direction:row;
    display:flex;
    align-items:center;
    margin-right:.5em;
    margin-left:auto;
  }

  /* mobile devices and small screens */
  @media (max-width: 700px){ 
      flex-direction:column;
      margin-top:.5em;
      margin-bottom:auto;
      display:${props => ((props.show) ? 'flex' : 'none')};
  }
`;

const MenuText = styled.p`
  margin: auto .25em auto .25em;
`;

const MenuItem = (props)=>(
  <MenuText><Link to={props.url}> {props.text} </Link></MenuText>
);

const MenuButtonDiv = styled.div`
  margin-left:auto;
  margin-right:.25em;

  .MenuButton {
    border:none;
    background:transparent;
    color:white;
    cursor:pointer;
  }
  
  .MenuButton :hover {
    color:#cccccc;
  }

  /* desktop */
  @media (min-width: 701px){ 
    display:none;
  }

  /* mobile devices and small screens */
  @media (max-width: 700px){ 
      display:block;
  }
`;

// Menu Button to show hamburger menu when it's a mobile device 
const MenuButton = (props) => (
  <MenuButtonDiv>
    <button class="MenuButton" onClick={props.onToggleMenu}>
      <FontAwesomeIcon icon={(props.showMenu) ? faCaretUp : faBars }/>
    </button>
  </MenuButtonDiv>
);

/**
 * Class to handle making the main menu
 */
class Menu extends React.Component{

  constructor(props){
    super(props);
    //check if we show the menu by default if we're on a mobile device 
    this.state = {
      showMenu:false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  /* Function to handle toggling the menu*/
  toggleMenu(){
    let toggled = !this.state.showMenu;
    this.setState({'showMenu':toggled});
  }

  render(){
    return(
      <HeaderContainer>
        <Logo>
          <MenuItem url="/" text={this.props.title} />
          <MenuButton showMenu = {this.state.showMenu} onToggleMenu={this.toggleMenu}/>
        </Logo>

        <MenuDiv show={this.state.showMenu}>
          <MenuItem url="/about" text="About" />
          <MenuItem url="/projects/projects" text="Projects" />
          <MenuItem url="/Matthew-Del-Signore-Resume.pdf" text="Resume" />
        </MenuDiv>
      </HeaderContainer>
    );
  }
}

const Header = ({ siteTitle }) => (
  <React.Fragment>
    <Menu title={siteTitle}/>
  </React.Fragment>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
