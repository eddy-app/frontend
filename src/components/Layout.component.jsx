import React from 'react';
import Navbar from './navbar/Navbar.component';
import Sidebar from './sidebar/Sidebar.component';
// import { AuthContext } from '../context/AuthContext';

const Layout = ({ children }) => {
  // const authContext = useContext(AuthContext);
  // const { currentUser } = authContext;
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="h-full flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
