
// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Logo from "../../assets/logo1.png";
// import envvar from "../../index";
// import "./Navbar.css";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   // 🟢 Fetch categories from API
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

//   // 🧭 Navigate and update selected category
//   const handleCategoryClick = (category) => {
//     localStorage.setItem("selectedCategory", category);
//     window.dispatchEvent(new CustomEvent("categoryChange", { detail: category }));
//     navigate("/ProductDisplay");
//     setDropdownOpen(null);
//     setOpen(false);
//   };

//   return (
//     <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
//       <div className="container">
//         {/* 🧴 Logo */}
//         <NavLink className="logo" to="/">
//           <img src={Logo} alt="LeoGuard" />
//         </NavLink>

//         {/* 🍔 Mobile Toggle */}
//         <div className="menu-toggle" onClick={() => setOpen(!open)}>
//           {open ? "✕" : "☰"}
//         </div>

//         {/* 🔗 Navigation */}
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

      
//           <li
//             className="dropdown"
//             onMouseEnter={() => setDropdownOpen("products")}
//             onMouseLeave={() => setDropdownOpen(null)}
//           >
//             <span className="drop-toggle">Product Categories ▾</span>

//             {dropdownOpen === "products" && categories.length > 0 && (
//               <div className="dropdown-grid">
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
//             <NavLink className="login-btn" to="/login" onClick={() => setOpen(false)}>
//               Login
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Logo from "../../assets/logo1.png";
// import envvar from "../../index";
// import "./Navbar.css";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

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

//   // 🌫️ Navbar scroll effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 🧭 Navigate category
//   const handleCategoryClick = (category) => {
//     localStorage.setItem("selectedCategory", category);
//     window.dispatchEvent(new CustomEvent("categoryChange", { detail: category }));
//     navigate("/ProductDisplay");
//     setDropdownOpen(null);
//     setOpen(false);
//   };

//   return (
//     <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
//       <div className="container">
//         {/* 🧴 Logo */}
//         <NavLink className="logo" to="/" onClick={() => setOpen(false)}>
//           <img src={Logo} alt="LeoGuard" />
//         </NavLink>

//         {/* 🍔 Mobile Menu Toggle */}
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

//           <li
//             className="dropdown"
//             onClick={() =>
//               dropdownOpen === "products"
//                 ? setDropdownOpen(null)
//                 : setDropdownOpen("products")
//             }
//             onMouseEnter={() => window.innerWidth > 992 && setDropdownOpen("products")}
//             onMouseLeave={() => window.innerWidth > 992 && setDropdownOpen(null)}
//           >
//             <span className="drop-toggle">Product Categories ▾</span>

//             {dropdownOpen === "products" && categories.length > 0 && (
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
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // 🟢 Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${envvar.baseurl}/category`);
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // 🌫️ Scroll background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🧭 Handle category click
  const handleCategoryClick = (category) => {
    localStorage.setItem("selectedCategory", category);
    window.dispatchEvent(new CustomEvent("categoryChange", { detail: category }));
    navigate("/ProductDisplay");
    setDropdownOpen(false);
    setOpen(false);
  };

  // 🚪 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        {/* 🧴 Logo */}
        <NavLink className="logo" to="/" onClick={() => setOpen(false)}>
          <img src={Logo} alt="LeoGuard" />
        </NavLink>

        {/* 🍔 Mobile Toggle */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </div>

        {/* 🔗 Nav Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <NavLink to="/" end onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About Us
            </NavLink>
          </li>

          {/* 🧩 Product Dropdown */}
          <li
            ref={dropdownRef}
            className="dropdown"
            onClick={() => {
              if (window.innerWidth <= 992) {
                setDropdownOpen((prev) => !prev); // toggle on mobile
              }
            }}
            onMouseEnter={() => window.innerWidth > 992 && setDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth > 992 && setDropdownOpen(false)}
          >
            <span className="drop-toggle">Product Categories ▾</span>

            {dropdownOpen && categories.length > 0 && (
              <div className="dropdown-grid scrollable-dropdown">
                {categories.map((cat) => (
                  <button
                    key={cat._id}
                    onClick={() => handleCategoryClick(cat.name)}
                    className="dropdown-link"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            )}
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </NavLink>
          </li>

          <li>
            <NavLink
              className="login-btn"
              to="/login"
              onClick={() => setOpen(false)}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
