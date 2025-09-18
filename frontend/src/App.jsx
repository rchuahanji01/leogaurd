import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Aboutus from "./pages/about/Aboutus";
import Contact from "./pages/contacts/Contact";
import Login from "./pages/login/Login";

// Admin
import AdminLayout from "./pages/admin/Admin";
import { DashboardHome, Users, Products, Settings } from "./pages/admin/AdminRoutes";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  // Hide navbar/footer on admin routes
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Normal Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Layout with Nested Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
