import React, { useContext } from 'react';
import Navbar from './navbar/Navbar.component';
import Sidebar from './sidebar/Sidebar.component';
import { AuthContext } from '../context/AuthContext';

const Layout = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  return (
    <>
      <div className={`h-screen flex ${currentUser ? 'flex-row' : 'flex-col'}`}>
        <Sidebar />
        <Navbar />
      </div>
      {children}
    </>
  );
};

export default Layout;
