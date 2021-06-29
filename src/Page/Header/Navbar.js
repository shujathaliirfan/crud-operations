import React, { useState } from "react";
import styled from "styled-components";
import { BsFillCaretDownFill ,BsFillCaretUpFill} from "react-icons/bs";


import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  console.log("isSHOWE" + isShown);

  const subMenuClick = () => {
    setIsShown(v => !v);
    // setIsOpen(v => !v);   
      
  }

  const hamburgerClick = () => {
    // setIsShown(v => !v);
    setIsOpen(v => !v);   
      
  }

  return (
    <Nav subMenu={subMenuClick}> 

<Logo onClick={subMenuClick}><Link to="">
        React  </Link>
      </Logo>
    
      
      <Hamburger onClick={ hamburgerClick}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink  onClick={subMenuClick}>Products {isShown ? <BsFillCaretUpFill className="icon"/> : <BsFillCaretDownFill className="icon" /> }
       
        <SubMenu isShown = {isShown} onClick={ hamburgerClick}> 
            <li><Link to ="/offer">Offer</Link></li>
            <li><Link to ="/new">New</Link></li>
            
         </SubMenu>                        
        </MenuLink>


        <Link to="/about" onClick={ hamburgerClick}> <MenuLink >About</MenuLink></Link>
        <Link  to="/services" onClick={ hamburgerClick}><MenuLink>Careers</MenuLink></Link>
        <Link to="/offer" onClick={ hamburgerClick}> <MenuLink >Contact</MenuLink></Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;



const MenuLink = styled.a`
  padding: 1rem 2rem;
  position:relative;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color:#ffffffe8;
  transition: all 0.1s ease-in;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    width: 100%;   
    
}
  &:hover {
    color: white;
    text-decoration:none!important;
    
  }
`;


const SubMenu = styled.ul`
position: absolute;
top:61px;
display:none;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
z-index: 99;
display: flex;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
background: yellow;
max-width: 297px!important;
text-align: left;
display: ${({ isShown }) => (isShown ? "block" : "none")};
list-style: none;
    padding: 0;
@media (max-width: 768px) {
    width: 100%;
    position:static;
    display: ${({ isShown }) => (isShown ? "block" : "none")};
    
    margin: 0;
    margin:auto;
    margin-top: 12px;
   

};
li{

list-style: none;
    padding: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    padding: 12px 16px;
    z-index: 1;
    background: green;
    color: white;
};
a {
    color:white;
    text-decoration:none!important;
}


`;

const Nav = styled.div`
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #28a745;
  position: relative;

`;

const Logo = styled.h4`
//   padding: 1rem 0;
  color:white!important;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  };
  a {
    color:white!important;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    width:100%;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "350px" : "0")};
    transition: max-height 0.3s ease-in;
    
  };
  @media (max-width: 768px) {
    a {
        padding: 1rem 2rem;
      }
  }
  
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background:white;
    margin-bottom: 4px;
    border-radius: 5px;
    color:white;
  }
  span:nth-child(1) {
    // background: ${({ isOpen }) => (isOpen ? "blue" : "green")};
  }
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;