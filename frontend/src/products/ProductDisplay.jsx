


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import envvar from "../index";
// import "./ProductDisplay.css";

// const ProductDisplay = () => {
//   const [products, setProducts] = useState([]);
//   const [category, setCategory] = useState(
//     localStorage.getItem("selectedCategory") || "All"
//   );

//   useEffect(() => {
//     const handleCategoryChange = (e) => setCategory(e.detail);
//     window.addEventListener("categoryChange", handleCategoryChange);
//     return () => window.removeEventListener("categoryChange", handleCategoryChange);
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const url =
//           category && category !== "All"
//             ? `${envvar.baseurl}/product?category=${category}`
//             : `${envvar.baseurl}/product`;
//         const res = await axios.get(url);
//         setProducts(res.data);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       }
//     };
//     fetchProducts();
//   }, [category]);

//   return (
//     <div className="product-display">
//       {/* 🟢 Hero Section */}
//       <div className="hero-banner">
//         <h1>{category === "All" ? "All Products" : `${category} Products`}</h1>
//       </div>

//       {/* 🧴 Product Details Section */}
//       <div className="product-container">
//         {products.length === 0 ? (
//           <p className="no-products">No products found.</p>
//         ) : (
//           products.map((p) => (
//             <div className="product-layout" key={p._id}>
//               {/* Left: Image */}
//               <div className="product-image">
//                 {p.images?.[0] && (
//                   <img
//                     src={`http://localhost:4001${p.images[0]}`}
//                     alt={p.name}
//                   />
//                 )}
//               </div>

//               {/* Right: Info */}
//               <div className="product-content">
//                 <h2 className="product-title">{p.name}</h2>

//                 {p.ingredients && (
//                   <>
//                     <h3>Ingredients:</h3>
//                     <p>{p.ingredients}</p>
//                   </>
//                 )}

//                 {p.description && (
//                   <>
//                     <h3>Description:</h3>
//                     <p>{p.description}</p>
//                   </>
//                 )}

//                 {p.indications?.length > 0 && (
//                   <>
//                     <h3>Indications:</h3>
//                     <ul>
//                       {p.indications.map((ind, i) => (
//                         <li key={i}>{ind}</li>
//                       ))}
//                     </ul>
//                   </>
//                 )}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import envvar from "../index";
import "./ProductDisplay.css";

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(
    localStorage.getItem("selectedCategory") || "All"
  );

  useEffect(() => {
    const handleCategoryChange = (e) => setCategory(e.detail);
    window.addEventListener("categoryChange", handleCategoryChange);
    return () => window.removeEventListener("categoryChange", handleCategoryChange);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url =
          category && category !== "All"
            ? `${envvar.baseurl}/product?category=${category}`
            : `${envvar.baseurl}/product`;
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <div className="product-display">
      {/* 🟢 Hero Section */}
      <div className="hero-banner">
        <h1>{category === "All" ? "All Products" : `${category} Products`}</h1>
      </div>

      {/* 🧴 Product Section */}
      <div className="product-container">
        {products.length === 0 ? (
          <p className="no-products">No products found.</p>
        ) : (
          products.map((p, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                className={`product-layout ${isEven ? "" : "reverse"}`}
                key={p._id}
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
                    <img
                      src={`http://localhost:4001${p.images[0]}`}
                      alt={p.name}
                    />
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
