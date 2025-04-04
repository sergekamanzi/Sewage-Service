import React, { useState } from 'react';
import "./navbar.css";
import logo from "/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='main-navbar'>
      <div className='logo1'>
        <img src={logo} alt="Logo" />
      </div>
      
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <div 
          className={`close-icon ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        ></div>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/why-us" onClick={toggleMenu}>Why Us</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/technology" onClick={toggleMenu}>Technology</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact us</Link></li>
        </ul>
      </div>
      
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;