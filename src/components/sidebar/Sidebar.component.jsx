import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../images/logo-white-sidebar.svg';

const Sidebar = () => {
  return (
    <div className="bg-primary h-full w-1/12 pt-8 pl-8">
      <Logo />
      <ul className="flex flex-col justify-start text-white mt-8">
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/devices">Devices</NavLink>
        </li>
        <li>
          <NavLink to="/:uid/devices">My Devices</NavLink>
        </li>
        <li>
          <NavLink to="/requests">Requests</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
