import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top bg-light">
    <Link className="navbar-brand" to="/">
      Jason's Place
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className= {
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/portfolio"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li
          className= {
            window.location.pathname === "/blog"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
