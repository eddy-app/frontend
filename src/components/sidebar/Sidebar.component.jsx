import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import { ReactComponent as Logo } from '../../images/logo-white-sidebar.svg';

const Sidebar = () => {
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  return (
    <div className="bg-primary h-full w-1/12 pt-8 pl-8">
      <Logo />
      <ul className="flex flex-col justify-start text-white mt-8">
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        {currentUser && currentUser.admin && (
          <>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/devices">Devices</NavLink>
            </li>
          </>
        )}
        {currentUser && (
          <>
            <li>
              <NavLink to={`/users/devices/${currentUser.sub}`}>
                My Devices
              </NavLink>
            </li>
            <li>
              <NavLink to={`/users/requests/${currentUser.sub}`}>
                Requests
              </NavLink>
            </li>
            <li>
              <NavLink to={`/settings/${currentUser.sub}`}>Settings</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
