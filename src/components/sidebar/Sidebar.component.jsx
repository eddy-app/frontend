import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = props => {
  return (
    <div className="bg-primary h-full w-1/12 pt-8 pl-8 ">
      <ul className="flex flex-col justify-start text-white">
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
