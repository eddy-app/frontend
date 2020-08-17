import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useContext,
} from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import NavLinks from './navlinks/NavLinks.component';
import { ReactComponent as Branding } from '../../images/logo.svg';

// Styles
import { header, logo } from './Navbar.styles';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authContext = useContext(AuthContext);
  const { isLoggedIn, currentUser, signOut } = authContext;
  const location = useLocation();
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
    if (isLoggedIn && currentUser) setIsAuthenticated(true);
    handleScroll();

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [handleScroll]);

  return (
    <section
      ref={navRef}
      className="w-full sticky top-0 p-6 transition-all duration-300 ease-in-out"
      id="header">
      <div
        ref={containerRef}
        className="container mx-auto transition-all duration-500 ease-in-out">
        <header className={header}>
          {!currentUser && (
            <a href="/">
              <h1 className={logo}>
                <Branding style={{ marginRight: '10px' }} /> eddy
              </h1>
            </a>
          )}
          <nav>
            <NavLinks
              location={location}
              isAuthenticated={isAuthenticated}
              currentUser={currentUser}
              signOut={signOut}
            />
          </nav>
        </header>
      </div>
    </section>
  );
};

export default Navbar;
