import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./head.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggle = () => {
    // create handler function for toggling isNavOpen state
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    // create handler function for closing navbar on link click
    setIsNavOpen(false);
  };

  return (
    <div className="zavzav">
      <div className="logo">Astroworld</div>
      <div className="navbar">
        <FaBars className="menu-icon" onClick={handleToggle} />
        <div className={isNavOpen ? "nav-links open" : "nav-links"}>
          {/* use className prop and ternary operator */}
          <ul>
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active"
              onClick={closeNav}
            >
              Home
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/About"
              className="nav-link"
              activeClassName="active"
              onClick={closeNav}
            >
              About us
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/Contact"
              className="nav-link"
              activeClassName="active"
              onClick={closeNav}
            >
              Contact
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/Prediction"
              className="nav-link"
              activeClassName="active"
              onClick={closeNav}
            >
              Prediction
            </NavLink>
          </ul>
          <ul>
            <NavLink
              to="/Remedies"
              className="nav-link"
              activeClassName="active"
              onClick={closeNav}
            >
              Remedies
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}