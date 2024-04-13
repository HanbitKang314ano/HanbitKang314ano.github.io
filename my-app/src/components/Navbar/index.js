import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav style={{marginLeft: '0px'}} >
        <NavMenu style={{ position: 'relative', marginRight: 'auto' }}>
          <NavLink to="/">
            Hanbit Kang
          </NavLink>
        </NavMenu>

        <NavMenu style={{ position: 'relative', justifyContent: 'center' }}>
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
        </NavMenu>

        <NavMenu style={{ position: 'relative', marginLeft: 'auto' }}>
          <NavLink to='/feedbacks'>
            Feedbacks
          </NavLink>
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