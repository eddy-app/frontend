import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  publicNavigation,
  privateNavigation,
  navlist,
  navlink,
  loginNavigation,
  ctaSignup,
} from './NavLinks.styles';

const NavLinks = ({ location, currentUser, isAuthenticated, signOut }) => {
  const renderNavLinks = () => {
    // Homepage Navbar
    if (!isAuthenticated && location.pathname === '/') {
      return (
        <>
          <ul className={`${publicNavigation} right-align`}>
            <li className={navlist}>
              <a className={navlink} href="#pricing">
                Pricing
              </a>
            </li>
            <li className={navlist}>
              <a className={navlink} href="#team">
                Team
              </a>
            </li>
            <li className={navlist}>
              <a className={navlink} href="#contact">
                Contact
              </a>
            </li>
            <li className={navlist}>
              <NavLink className={ctaSignup} to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </>
      );
      // Login page Navbar
    } else if (!isAuthenticated && location.pathname === '/login') {
      return (
        <>
          <ul className={loginNavigation}>
            <li>
              <NavLink to="/">
                <FontAwesomeIcon icon="chevron-left" /> Home
              </NavLink>
            </li>
          </ul>
        </>
      );
      // Dashboard page Navbar
    } else {
      return (
        <>
          <ul className={privateNavigation}>
            <li>
              <p>{currentUser.name}</p>
            </li>
            <li>
              <button onClick={signOut} className={navlink}>
                Logout
              </button>
            </li>
          </ul>
        </>
      );
    }
  };
  return <>{renderNavLinks()}</>;
};

NavLinks.propTypes = {
  location: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
};

export default NavLinks;
