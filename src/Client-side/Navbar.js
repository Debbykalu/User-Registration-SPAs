import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-links">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-links">
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-links">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-links">
              Contact
            </Link>
          </li>
        </ul>
        <div className="navbar-auth">
          <Link to="/signup" className="navbar-links">
            Sign Up
          </Link>
          <Link to="/signin" className="navbar-links">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
