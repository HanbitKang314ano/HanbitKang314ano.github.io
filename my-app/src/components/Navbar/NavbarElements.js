import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: #232B2B;
  width: 100vw;
  height: 110px;
  display: flex;
  justify-content: center;
  z-index: 12;
  font-family: Courier, monospace;
`;
  
export const NavLink = styled(Link)`
  color: #FFFFFF;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 50%;
  cursor: pointer;
  &.active {
    color: #FFFFFF;
  }
  &:hover {
    background-color: #1A2421;
  }
  &:first-child {
    margin-right: auto; /* Move the leftmost NavLink to the left */
  }

  &:last-child {
    margin-left: auto; /* Move the rightmost NavLink to the right */
  }

  font-family: Courier, monospace;
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #E69138;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #E69138;
  padding: 10px 22px;
  color: #783f04;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #E69138;
  }
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace !important;
`;