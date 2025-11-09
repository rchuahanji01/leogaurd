
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { products } from "../assets/productsimg/products"; 
import "./ProductDisplay.css";

const ProductDisplay = () => {
  const [category, setCategory] = useState(
    localStorage.getItem("selectedCategory") || "All"
  );

  const [filteredProducts, setFilteredProducts] = useState([]);

  // 🔁 Watch for category change (from Navbar)
  useEffect(() => {
    const handleCategoryChange = (e) => setCategory(e.detail);
    window.addEventListener("categoryChange", handleCategoryChange);
    return () =>
      window.removeEventListener("categoryChange", handleCategoryChange);
  }, []);

  // 🔍 Filter products locally instead of API call
  useEffect(() => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (p) =>
          p.category.toLowerCase().trim() === category.toLowerCase().trim()
      );
      setFilteredProducts(filtered);
    }
  }, [category]);

  return (
    <div className="product-display">
      {/* 🟢 Hero Section */}
      <div className="hero-banner">
        <h1>
          {category === "All" ? "All Products" : `${category} Products`}
        </h1>
      </div>

      {/* 🧴 Product Section */}
      <div className="product-container">
        {filteredProducts.length === 0 ? (
          <p className="no-products">No products found.</p>
        ) : (
          filteredProducts.map((p, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                className={`product-layout ${isEven ? "" : "reverse"}`}
                key={p.id}
              >
                {/* Image Animation */}
                <motion.div
                  className="product-image"
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  {p.images?.[0] && (
                    <img src={p.images[0]} alt={p.name} />
                  )}
                </motion.div>

                {/* Text Animation */}
                <motion.div
                  className="product-content"
                  initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <h2 className="product-title">{p.name}</h2>

                  {p.ingredients && (
                    <>
                      <h3>Ingredients:</h3>
                      <p>{p.ingredients}</p>
                    </>
                  )}

                  {p.description && (
                    <>
                      <h3>Description:</h3>
                      <p>{p.description}</p>
                    </>
                  )}

                  {p.indications?.length > 0 && (
                    <>
                      <h3>Indications:</h3>
                      <ul>
                        {p.indications.map((ind, i) => (
                          <li key={i}>{ind}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </motion.div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;

