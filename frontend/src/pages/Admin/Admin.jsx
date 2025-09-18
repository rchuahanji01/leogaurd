    // // src/pages/admin/Admin.jsx
    // import React from "react";
    // import { Routes, Route, Link } from "react-router-dom";
    // import "./Admin.css";

    // // Dummy subpages
    // const DashboardHome = () => <h2>📊 Dashboard Overview</h2>;
    // const Users = () => <h2>👥 Manage Users</h2>;
    // const Products = () => <h2>🛍 Manage Products</h2>;
    // const Settings = () => <h2>⚙ Settings</h2>;

    // const Admin = () => {
    // return (
    //     <div className="admin-container">
    //     {/* Sidebar */}
    //     <aside className="sidebar">
    //         <h1 className="logo">AdminPanel</h1>
    //         <nav>
    //         <ul>
    //             <li><Link to="/admin">Dashboard</Link></li>
    //             <li><Link to="/admin/users">Users</Link></li>
    //             <li><Link to="/admin/products">Products</Link></li>
    //             <li><Link to="/admin/settings">Settings</Link></li>
    //         </ul>
    //         </nav>
    //     </aside>

    //     {/* Main Content */}
    //     <main className="content">
    //         <Routes>
    //         <Route path="/" element={<DashboardHome />} />
    //         <Route path="/users" element={<Users />} />
    //         <Route path="/products" element={<Products />} />
    //         <Route path="/settings" element={<Settings />} />
    //         </Routes>
    //     </main>
    //     </div>
    // );
    // };

    // export default Admin;

    // src/pages/admin/AdminLayout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Admin.css";

const AdminLayout = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">AdminPanel</h1>
        <nav>
          <ul>
            <li><Link to="/admin">Dashboard</Link></li>
            <li><Link to="/admin/users">Users</Link></li>
            <li><Link to="/admin/products">Products</Link></li>
            <li><Link to="/admin/settings">Settings</Link></li>
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main className="content">
        <Outlet /> {/* 👈 This is where child routes render */}
      </main>
    </div>
  );
};

export default AdminLayout;
