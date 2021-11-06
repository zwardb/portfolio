import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="navbar">
      <ul id="navList">
        <li><Link className="navLink" to="/">Home</Link></li>
        <li><Link className="navLink" to="/about">About</Link></li>
        <li><Link className="navLink" to="/projects">Projects</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;
