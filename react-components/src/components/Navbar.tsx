import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navbar__list">
          <li key={'main'} className="navbar__link">
            <NavLink to="/">Main</NavLink>
          </li>
          <li key={'about'} className="navbar__link">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
