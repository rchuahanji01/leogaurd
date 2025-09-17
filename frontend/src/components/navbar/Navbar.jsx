

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo1.png";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        {/* Logo */}
        <NavLink className="logo" to="/">
          <img src={Logo} alt="LeoGuard" />
        </NavLink>

        {/* Hamburger */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>

        {/* Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>

          <li >
             <NavLink to="/about">About Us</NavLink>
          </li>

          <li className="dropdown">
            <span className="drop-toggle">Product Classification ▾</span>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/products/skin">Skin Care</NavLink>
              </li>
              <li>
                <NavLink to="/products/hair">Hair Care</NavLink>
              </li>
            </ul>
          </li>

          

          <li className="dropdown">
            <span className="drop-toggle">Blog ▾</span>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/blogs/skin-tips">Skin Care Tips</NavLink>
              </li>
              <li>
                <NavLink to="/blogs/hair-tips">Hair Care Tips</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>

          <li>
            <NavLink className="login-btn" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
