

import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo1.png";
import { products } from "../../assets/productsimg/products";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // ✅ Static category data
  const allCategories = [
    "Hair Care",
    "Skin Care",
    "Shampoo",
    "Soap",
    "Sunscreen",
    "Face Wash",
    "Moisturizer",
    "Antioxidant",
    "Melasma",
  ];

  // 🌫️ Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🧭 Handle Category Click
  const handleCategoryClick = (category) => {
    localStorage.setItem("selectedCategory", category);
    window.dispatchEvent(new CustomEvent("categoryChange", { detail: category }));
    navigate("/ProductDisplay");
    setDropdownOpen(false);
    setOpen(false);
  };

  // 🚪 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔍 Search handler
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 3));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    setSuggestions([]);
    setSearchTerm("");
  };

  const handleSelectSuggestion = (name) => {
    navigate(`/search?query=${encodeURIComponent(name)}`);
    setSuggestions([]);
    setSearchTerm("");
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        {/* 🧴 Logo */}
        <NavLink className="logo" to="/" onClick={() => setOpen(false)}>
          <img src={Logo} alt="LeoGard" />
        </NavLink>
    
        {/* 🔍 Search Bar (Visible on desktop top row) */}
        <form className="search-bar desktop-search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit">🔍</button>

          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((item, index) => (
                <li key={index} onClick={() => handleSelectSuggestion(item.name)}>
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </form>
          <div className="mobile-search11">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <button type="submit">🔍</button>

              {suggestions.length > 0 && (
                <ul className="suggestions11">
                  {suggestions.map((item, index) => (
                    <li key={index} onClick={() => handleSelectSuggestion(item.name)}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>
        {/* 🍔 Mobile Toggle */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </div>

        {/* 🧭 Nav Links */}
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
            <span className="drop-toggle">Categories ▾</span>

            {dropdownOpen && (
              <div className="dropdown-grid scrollable-dropdown">
                {allCategories.map((cat, i) => (
                  <button
                    key={i}
                    className="dropdown-link"
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat}
                  </button>
                ))}
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

          {/* 🔍 Mobile Search Below Logo */}
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
