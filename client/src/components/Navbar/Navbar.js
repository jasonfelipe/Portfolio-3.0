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
          className={
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
            window.location.pathname === "/blog"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/blog" className="nav-link">
            Blog
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

      </ul>

      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Stuff<span className="caret"></span></a>
        <ul className="dropdown-menu">

          <li className={
            window.location.pathname === "/"
              ? "dropdown-link active"
              : "dropdown-link"
          }
          >
            <Link to="/" className="dropdown-link">
              Home
            </Link>
          </li>

          <li className={
            window.location.pathname === "/portfolio"
              ? "dropdown-link active"
              : "dropdown-link"
          }
          >
            <Link to="/portfolio" className="dropdown-link">
              Portfolio
            </Link>
          </li>

          <li className={
            window.location.pathname === "/blog"
              ? "dropdown-link active"
              : "dropdown-link"
          }
          >
            <Link to="/blog" className="dropdown-link">
              Blog
            </Link>
          </li>

          <li role="separator" className="divider"></li>

          <li className={
            window.location.pathname === "/contact"
              ? "dropdown-link active"
              : "dropdown-link"
          }
          >
            <Link to="/contact" className="dropdown-link">
              Contact Page
            </Link>
          </li>
          <li><a target="_blank" href="https://github.com/jasonfelipe" className='dropdown-link'>My Github</a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/jason-felipe-089558107/" className='dropdown-link'>My Linkedin</a></li>

        </ul>
      </li>

    </div>
  </nav>

);




export default Navbar;
