import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

// Pages
import Home from "./pages/home/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";

// Product Subpages
import SkinProducts from "./pages/products/skinproduct/SkinProducts";
import HairProducts from "./pages/products/hairproduct/HairProducts";

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /> */}
        <Route path="/products/skin" element={<SkinProducts />} />
        <Route path="/products/hair" element={<HairProducts />} />
        {/* <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
