

import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo1.png";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdown, setSubDropdown] = useState(null); // which submenu is open
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // ✅ Static category data (no API calls)
  const sectionCategories = [
    { id: 1, name: "Hair Care" },
    { id: 2, name: "Skin Care" },
     { id: 3, name: "Shampoo" },
    { id: 4, name: "Soap" },
  ];

  const indicationCategories = [
    { id: 5, name: "Sunscreen" },
    { id: 6, name: "Face Wash" },
    { id: 7, name: "Moisturizer" },
    { id: 8, name: "Antioxidant" },
    { id: 9,name: "Melasma" },
  ];

  // 🌫️ Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🧭 Category click handler (save to localStorage & redirect)
  const handleCategoryClick = (category) => {
    localStorage.setItem("selectedCategory", category);
    window.dispatchEvent(new CustomEvent("categoryChange", { detail: category }));
    navigate("/ProductDisplay");
    setDropdownOpen(false);
    setSubDropdown(null);
    setOpen(false);
  };

  // 🚪 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setSubDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        {/* Logo */}
        <NavLink className="logo" to="/" onClick={() => setOpen(false)}>
          <img src={Logo} alt="LeoGuard" />
        </NavLink>

        {/* Mobile toggle */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </div>

        {/* Nav links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>

          {/* Product dropdown */}
          <li
            ref={dropdownRef}
            className="dropdown"
            onMouseEnter={() => window.innerWidth > 992 && setDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 992 && setDropdownOpen(false)}
            onClick={() => {
              if (window.innerWidth <= 992) setDropdownOpen(!dropdownOpen);
            }}
          >
            <span className="drop-toggle">Product Categories ▾</span>

            {dropdownOpen && (
              <div className="dropdown-menu">
                {/* Level 1 - Section/Indication Based */}
                <div
                  className="dropdown-item"
                  onMouseEnter={() => setSubDropdown("section")}
                  onMouseLeave={() => setSubDropdown(null)}
                >
                  Section Based ▸
                  {subDropdown === "section" && sectionCategories.length > 0 && (
                    <div className="sub-dropdown">
                      {sectionCategories.map((cat) => (
                        <button
                          key={cat.id}
                          className="dropdown-link"
                          onClick={() => handleCategoryClick(cat.name)}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className="dropdown-item"
                  onMouseEnter={() => setSubDropdown("indication")}
                  onMouseLeave={() => setSubDropdown(null)}
                >
                  Indication Based ▸
                  {subDropdown === "indication" && indicationCategories.length > 0 && (
                    <div className="sub-dropdown">
                      {indicationCategories.map((cat) => (
                        <button
                          key={cat.id}
                          className="dropdown-link"
                          onClick={() => handleCategoryClick(cat.name)}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>

          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;