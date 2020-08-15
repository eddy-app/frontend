import React, { useContext } from 'react';
import Navbar from './navbar/Navbar.component';
import { AuthContext } from '../context/AuthContext';

const Layout = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  return (
    <>
      {!currentUser && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
