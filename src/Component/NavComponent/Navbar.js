import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { FaBars, FaTimes } from 'react-icons/fa';
import CallUsButton from './CallUsButton';
import './Navbar.css'; // Import your custom CSS file

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-light bg-primary bg-gradient fixed-top bg-light  `}>
        
        <div className="container ">
        <Link to="/" className="navbar-brand">
          <img src={process.env.PUBLIC_URL + '/image/lkl.jpg'} alt="Website Logo" className="custom-logo img-fluid" />
       </Link>


          <button
            className={`navbar-toggler ${showNavbar ? '' : 'collapsed'}`}
            type="button"
            onClick={toggleNavbar}
            data-bs-toggle="#navbarNav"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={showNavbar ? 'true' : 'false'}
          >
            {showNavbar ? <FaTimes /> : <FaBars />}
          </button>
          <div className={`collapse navbar-collapse ${showNavbar ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="text-dark">
                <Link to="/" className="nav-link" onClick={toggleNavbar}>
                  Home
                </Link>
              </li>
              <li className="text-dark">
                <Link to="/about" className="nav-link" onClick={toggleNavbar}>
                  About
                </Link>
              </li>
              <li className="text-dark">
                <Link to="/contact" className="nav-link" onClick={toggleNavbar}>
                  Contact
                </Link>
              </li>
              <li className="text-dark">
                <Link to="/service" className="nav-link" onClick={toggleNavbar}>
                  Service
                </Link>
              </li>
              <li className="text-dark">
                <Link to="/blog" className="nav-link" onClick={toggleNavbar}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <CallUsButton />
      </nav>
    </div>
  );
};

export default Navbar;
