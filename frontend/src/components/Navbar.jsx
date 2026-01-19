import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">🍽️ Find My Restaurant</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/add" className="btn-add">Add Restaurant</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
