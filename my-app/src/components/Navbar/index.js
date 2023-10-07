import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import logo from '../../images/Logo.png';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        
        <NavMenu>
          <NavLink to="/">
            <img style={{ width: '140px', height: 'auto', float: 'left' }} src={logo} alt="Logo" />
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/events'>
            Events
          </NavLink>
          <NavLink to='/projects'>
            Projects
          </NavLink>
          <NavLink to='/blogs'>
            Blogs
          </NavLink>
          <NavLink to='/resume'>
            Resume/Experience
          </NavLink>
          <NavLink to='/feedbacks'>
            Feedbacks
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/*
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
        */}
      </Nav>
    </>
  );
};
  
export default Navbar;