import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <ul>
      <li>
        <NavLink to="/"> Books </NavLink>
        {' '}
      </li>
      {' '}
      <li>
        <NavLink to="/Categories"> Categories </NavLink>
        {' '}
      </li>
      {' '}
    </ul>
    {' '}
  </div>
);

export default NavBar;
