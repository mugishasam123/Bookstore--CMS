import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import './styles/navBar.css';

const NavBar = () => (
  <div className="navbar">
    <div className="left">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/Categories" className="nav-link">
            Categories
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="panel-bg">
      <ImUser className="oval" />
    </div>
  </div>
);

export default NavBar;
