

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { products } from "../../assets/productsimg/products";
// import "../../products/ProductDisplay.css";

// const SearchPage = () => {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search).get("query") || "";
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     if (query.trim().length > 0) {
//       const filtered = products.filter((p) =>
//         p.name.toLowerCase().includes(query.toLowerCase())
//       );
//       setResults(filtered);
//     } else {
//       setResults([]);
//     }
//   }, [query]);

//   return (
//     <div className="product-display">
//       {/* 🟢 Hero Banner */}
//       <div className="hero-banner">
//         <h1>Search Results for “{query}”</h1>
//       </div>

//       {/* 🧴 Search Results Section */}
//       <div className="product-container">
//         {results.length === 0 ? (
//           <p className="no-products">No products found.</p>
//         ) : (
//           results.map((p, index) => {
//             const isEven = index % 2 === 0;
//             return (
//               <div
//                 className={`product-layout ${isEven ? "" : "reverse"}`}
//                 key={p.id}
//               >
//                 {/* Product Image */}
//                 <motion.div
//                   className="product-image"
//                   initial={{ opacity: 0, x: isEven ? -100 : 100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   viewport={{ once: true, amount: 0.4 }}
//                 >
//                   {p.images?.[0] && <img src={p.images[0]} alt={p.name} />}
//                 </motion.div>

//                 {/* Product Info */}
//                 <motion.div
//                   className="product-content"
//                   initial={{ opacity: 0, x: isEven ? 100 : -100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//                   viewport={{ once: true, amount: 0.4 }}
//                 >
//                   <h2 className="product-title">{p.name}</h2>

//                   {p.ingredients && (
//                     <>
//                       <h3>Ingredients:</h3>
//                       <p>{p.ingredients}</p>
//                     </>
//                   )}

//                   {p.description && (
//                     <>
//                       <h3>Description:</h3>
//                       <p>{p.description}</p>
//                     </>
//                   )}

//                   {p.indications?.length > 0 && (
//                     <>
//                       <h3>Indications:</h3>
//                       <ul>
//                         {p.indications.map((ind, i) => (
//                           <li key={i}>{ind}</li>
//                         ))}
//                       </ul>
//                     </>
//                   )}
//                 </motion.div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;

// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { products } from "../../assets/productsimg/products";
// import "../../products/ProductDisplay.css";

// const SearchPage = () => {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search).get("query") || "";
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     if (query.trim().length > 0) {
//       const q = query.toLowerCase();

//       const filtered = products.filter((p) => {
//         const nameMatch = p.name?.toLowerCase().includes(q);
//         const categoryMatch = p.category?.toLowerCase().includes(q);
//         const ingredientMatch = p.ingredients?.toLowerCase().includes(q);
//         const descriptionMatch = p.description?.toLowerCase().includes(q);
//         const indicationMatch = p.indications?.some((ind) =>
//           ind.toLowerCase().includes(q)
//         );

//         return (
//           nameMatch ||
//           categoryMatch ||
//           ingredientMatch ||
//           descriptionMatch ||
//           indicationMatch
//         );
//       });

//       setResults(filtered);
//     } else {
//       setResults([]);
//     }
//   }, [query]);

//   return (
//     <div className="product-display">
//       {/* 🟢 Hero Banner */}
//       <div className="hero-banner">
//         <h1>Search Results for “{query}”</h1>
//         {results.length > 0 && (
//           <p className="result-count">
//             {results.length} product{results.length > 1 ? "s" : ""} found
//           </p>
//         )}
//       </div>

//       {/* 🧴 Search Results Section */}
//       <div className="product-container">
//         {results.length === 0 ? (
//           <p className="no-products">No products found.</p>
//         ) : (
//           results.map((p, index) => {
//             const isEven = index % 2 === 0;
//             return (
//               <div
//                 className={`product-layout ${isEven ? "" : "reverse"}`}
//                 key={p.id}
//               >
//                 {/* Product Image */}
//                 <motion.div
//                   className="product-image"
//                   initial={{ opacity: 0, x: isEven ? -100 : 100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   viewport={{ once: true, amount: 0.4 }}
//                 >
//                   {p.images?.[0] && <img src={p.images[0]} alt={p.name} />}
//                 </motion.div>

//                 {/* Product Info */}
//                 <motion.div
//                   className="product-content"
//                   initial={{ opacity: 0, x: isEven ? 100 : -100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//                   viewport={{ once: true, amount: 0.4 }}
//                 >
//                   <h2 className="product-title">{p.name}</h2>

//                   {p.ingredients && (
//                     <>
//                       <h3>Ingredients:</h3>
//                       <p>{p.ingredients}</p>
//                     </>
//                   )}

//                   {p.description && (
//                     <>
//                       <h3>Description:</h3>
//                       <p>{p.description}</p>
//                     </>
//                   )}

//                   {p.indications?.length > 0 && (
//                     <>
//                       <h3>Indications:</h3>
//                       <ul>
//                         {p.indications.map((ind, i) => (
//                           <li key={i}>{ind}</li>
//                         ))}
//                       </ul>
//                     </>
//                   )}
//                 </motion.div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../../assets/productsimg/products";
import "./SearchResults.css"; // optional styling if you want tweaks

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="search-results-page">
      {results.length === 0 ? (
        <p className="no-products">No products found for "{query}".</p>
      ) : (
        <div className="product-container">
          {results.map((p, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                className={`product-layout ${isEven ? "" : "reverse"}`}
                key={p.id}
              >
                {/* Image */}
                <div className="product-image">
                  {p.images?.[0] && <img src={p.images[0]} alt={p.name} />}
                </div>

                {/* Content */}
                <div className="product-content">
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
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
