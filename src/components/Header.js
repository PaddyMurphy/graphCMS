import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
  <header className="Header-header">
    <h1 className="Header-h1">Mountain routes</h1>
    <nav className="Header-nav">
      <NavLink
        exact
        to="/"
        className="Header-navLink"
        activeClassName="Header-isActive">
        Home
      </NavLink>
    </nav>
  </header>
);
