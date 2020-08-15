import React, { useEffect, useRef, useCallback, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../context/AuthContext';
import { ReactComponent as Branding } from '../../images/logo.svg';

// Styles
import {
  header,
  logo,
  publicNavigation,
  loginNavigation,
  privateNavigation,
  navlist,
  navlink,
  ctaSignup,
  ctaDashboard,
} from './Navbar.styles';

const Navbar = () => {
  const location = useLocation();
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;

  const navRef = useRef();
  const containerRef = useRef();

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 30) {
      navRef.current.classList.add('shadow-lg');
      navRef.current.classList.add('bg-white');
      navRef.current.classList.add('animated');
      containerRef.current.classList.remove('container');
      containerRef.current.classList.remove('mx-auto');
      navRef.current.classList.add('fadeIn');
      navRef.current.classList.add('slow');
    } else {
      navRef.current.classList.remove('shadow-lg');
      navRef.current.classList.remove('bg-white');
      navRef.current.classList.remove('animated');
      containerRef.current.classList.add('container');
      containerRef.current.classList.add('mx-auto');
      navRef.current.classList.remove('fadeIn');
      navRef.current.classList.remove('slow');
    }
  }, []);

  useEffect(() => {
    handleScroll();

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <section
      ref={navRef}
      className="sticky top-0 p-6 transition-all duration-300 ease-in-out"
      id="header">
      <div
        ref={containerRef}
        className="container mx-auto transition-all duration-500 ease-in-out">
        <header className={header}>
          <a href="/">
            <h1 className={logo}>
              <Branding style={{ marginRight: '10px' }} /> eddy
            </h1>
          </a>
          <nav>
            {!currentUser ? (
              location.pathname === '/' ? (
                <ul className={`${publicNavigation} right-align`}>
                  <li className={navlist}>
                    <a href="#pricing" className={navlink}>
                      Pricing
                    </a>
                  </li>
                  <li className={navlist}>
                    <a href="#team" className={navlink}>
                      Team
                    </a>
                  </li>
                  <li className={navlist}>
                    <a href="#contact" className={navlink}>
                      Contact
                    </a>
                  </li>
                  <li>
                    <NavLink className={ctaSignup} to="/login">
                      Login
                    </NavLink>
                  </li>
                </ul>
              ) : (
                <ul className={loginNavigation}>
                  <li>
                    <NavLink to="/" className={navlink}>
                      <FontAwesomeIcon icon="chevron-left" /> Home
                    </NavLink>
                  </li>
                </ul>
              )
            ) : (
              <ul className={privateNavigation}>
                <li>
                  <a href="#pricing" className={navlink}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#team" className={navlink}>
                    Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className={navlink}>
                    Contact
                  </a>
                </li>
                <li>
                  <NavLink to="/dashboard" className={ctaDashboard}>
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            )}
          </nav>
        </header>
      </div>
    </section>
  );
};

export default Navbar;
