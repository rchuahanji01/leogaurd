

import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Admin.css";

const AdminLayout = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">AdminPanel</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">← Home</Link>
            </li>

            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/category">Category</Link>
            </li>
            <li>
              <Link to="/admin/products">Products</Link>
            </li>
            

            {/* Products hover submenu */}
            {/* <li
              className="has-submenu"
              onMouseEnter={() => setShowSubmenu(true)}
              onMouseLeave={() => setShowSubmenu(false)}
            >
              <span className="submenu-trigger">Products ▾</span>
              {showSubmenu && (
                <ul className="submenu">
                  <li><Link to="/admin/skincare">Skincare</Link></li>
                  <li><Link to="/admin/haircare">Haircare</Link></li>
                </ul>
              )}
            </li> */}

            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content">
        <Outlet />  {/* 👈 renders your nested admin pages */}
      </main>
    </div>
  );
};

export default AdminLayout;
