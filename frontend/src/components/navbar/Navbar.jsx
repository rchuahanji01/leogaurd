


// import React, { useState, useEffect, useRef } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Logo from "../../assets/logo1.png";
// import envvar from "../../index";
// import "./Navbar.css";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   // 🟢 Fetch categories
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(`${envvar.baseurl}/category`);
//         setCategories(res.data);
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // 🌫️ Scroll background effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 🧭 Handle category click
//   const handleCategoryClick = (category) => {
//     localStorage.setItem("selectedCategory", category);
//     window.dispatchEvent(new CustomEvent("categoryChange", { detail: category }));
//     navigate("/ProductDisplay");
//     setDropdownOpen(false);
//     setOpen(false);
//   };

//   // 🚪 Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target)
//       ) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
//       <div className="container">
//         {/* 🧴 Logo */}
//         <NavLink className="logo" to="/" onClick={() => setOpen(false)}>
//           <img src={Logo} alt="LeoGuard" />
//         </NavLink>

//         {/* 🍔 Mobile Toggle */}
//         <div className="menu-toggle" onClick={() => setOpen(!open)}>
//           {open ? "✕" : "☰"}
//         </div>

//         {/* 🔗 Nav Links */}
//         <ul className={`nav-links ${open ? "open" : ""}`}>
//           <li>
//             <NavLink to="/" end onClick={() => setOpen(false)}>
//               Home
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/about" onClick={() => setOpen(false)}>
//               About Us
//             </NavLink>
//           </li>

//           {/* 🧩 Product Dropdown */}
//           <li
//             ref={dropdownRef}
//             className="dropdown"
//             onClick={() => {
//               if (window.innerWidth <= 992) {
//                 setDropdownOpen((prev) => !prev); // toggle on mobile
//               }
//             }}
//             onMouseEnter={() => window.innerWidth > 992 && setDropdownOpen(true)}
//             onMouseLeave={() => window.innerWidth > 992 && setDropdownOpen(false)}
//           >
//             <span className="drop-toggle">Product Categories ▾</span>

//             {dropdownOpen && categories.length > 0 && (
//               <div className="dropdown-grid scrollable-dropdown">
//                 {categories.map((cat) => (
//                   <button
//                     key={cat._id}
//                     onClick={() => handleCategoryClick(cat.name)}
//                     className="dropdown-link"
//                   >
//                     {cat.name}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </li>

//           <li>
//             <NavLink to="/contact" onClick={() => setOpen(false)}>
//               Contact Us
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               className="login-btn"
//               to="/login"
//               onClick={() => setOpen(false)}
//             >
//               Login
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/logo1.png";
import envvar from "../../index";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdown, setSubDropdown] = useState(null); // which submenu is open
  const [sectionCategories, setSectionCategories] = useState([]);
  const [indicationCategories, setIndicationCategories] = useState([]);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // 🌫️ Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🧭 Category click handler
  const handleCategoryClick = (category) => {
    localStorage.setItem("selectedCategory", category);
    window.dispatchEvent(new CustomEvent("categoryChange", { detail: category }));
    navigate("/ProductDisplay");
    setDropdownOpen(false);
    setSubDropdown(null);
    setOpen(false);
  };

  // 🧠 Fetch function
  const fetchCategories = async (type) => {
    try {
      const res = await axios.get(
        `${envvar.baseurl}/category/description?type=${encodeURIComponent(type)}`
      );
      if (type === "Section Based") {
        setSectionCategories(res.data);
      } else {
        setIndicationCategories(res.data);
      }
    } catch (err) {
      console.error(`Error fetching ${type} categories:`, err);
    }
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
                  onMouseEnter={() => {
                    setSubDropdown("section");
                    fetchCategories("Section Based");
                  }}
                  onMouseLeave={() => setSubDropdown(null)}
                >
                  Section Based ▸
                  {subDropdown === "section" && sectionCategories.length > 0 && (
                    <div className="sub-dropdown">
                      {sectionCategories.map((cat) => (
                        <button
                          key={cat._id}
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
                  onMouseEnter={() => {
                    setSubDropdown("indication");
                    fetchCategories("Indication Based");
                  }}
                  onMouseLeave={() => setSubDropdown(null)}
                >
                  Indication Based ▸
                  {subDropdown === "indication" && indicationCategories.length > 0 && (
                    <div className="sub-dropdown">
                      {indicationCategories.map((cat) => (
                        <button
                          key={cat._id}
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

          {/* Product Categories dropdown */}
          

          <li>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </NavLink>
          </li>

          <li>
            <NavLink className="login-btn" to="/login" onClick={() => setOpen(false)}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
