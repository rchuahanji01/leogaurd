

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import './App.css'
import Home from "./pages/home/Home";
// import CompanyIntro from "./components/CompanyIntro/CompanyIntro";
import Aboutus from "./pages/about/Aboutus";
import Contact from "./pages/contacts/Contact";
import Login from "./pages/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
// import Skincare from "./pages/adminPages/adminProduct/skincare/Skincare";
// import Haircare from "./pages/adminPages/adminProduct/haircare/Haircare";
import ProductDisplay from './products/ProductDisplay'
// Admin
import AdminLayout from "./pages/Admin/Admin";
import { DashboardHome, Products,CategoryManage } from "./pages/Admin/AdminRoutes";

function App() {

  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  // Hide Navbar/Footer on admin routes
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* 🌐 Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ProductDisplay" element={<ProductDisplay />} />

        {/* 🔒 Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          {/* <Route path="users" element={<Users />} /> */}
          <Route path="products" element={<Products />} />
          {/* <Route path="settings" element={<Settings />} />
          <Route path="skincare" element={<Skincare />} />
          <Route path="haircare" element={<Haircare />} /> */}
          <Route path="category" element={<CategoryManage />} />


          
          {/* <Route path="products/skincare" element={<Skincare />} />
          <Route path="products/haircare" element={<Haircare />} /> */}
        </Route>

        {/* Redirect invalid paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* {!isAdminRoute && <CompanyIntro />}  */}
      {!isAdminRoute && <WhatsAppButton />}    
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
