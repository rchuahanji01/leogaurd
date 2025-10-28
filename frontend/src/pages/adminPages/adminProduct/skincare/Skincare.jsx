

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Skincare.css";
// import envvar from "../../../../index";

// const Skincare = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [files, setFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [products, setProducts] = useState([]);

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     composition: "",
//     category: "Skincare",
//     packSize: "",
//     keyPoints: "",
//   });

//   // 🔹 Fetch skincare products
//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(`${envvar.baseurl}/product?category=Skincare`);
//       setProducts(res.data);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setFiles(selectedFiles);
//     setPreviews(selectedFiles.map((f) => URL.createObjectURL(f)));
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       description: "",
//       composition: "",
//       category: "Skincare",
//       packSize: "",
//       keyPoints: "",
//     });
//     setFiles([]);
//     setPreviews([]);
//     setEditingId(null);
//   };

//   // ✅ Add or Update Product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       Object.entries(formData).forEach(([key, val]) => data.append(key, val));
//       files.forEach((f) => data.append("images", f));

//       if (editingId) {
//         await axios.put(`${envvar.baseurl}/product/${editingId}`, data, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         alert("✅ Product updated!");
//       } else {
//         await axios.post(`${envvar.baseurl}/product`, data, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         alert("✅ Skincare product added!");
//       }

//       resetForm();
//       setShowForm(false);
//       fetchProducts();
//     } catch (err) {
//       console.error("Error saving product:", err);
//     }
//   };

//   // 🗑️ Delete
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;
//     try {
//       await axios.delete(`${envvar.baseurl}/product/${id}`);
//       alert("🗑️ Product deleted!");
//       fetchProducts();
//     } catch (err) {
//       console.error("Error deleting product:", err);
//     }
//   };

//   // ✏️ Edit
//   const handleEdit = (product) => {
//     setEditingId(product._id);
//     setShowForm(true);
//     setFormData({
//       name: product.name,
//       description: product.description,
//       composition: product.composition,
//       category: product.category,
//       packSize: product.packSize,
//       keyPoints: product.keyPoints.join(", "),
//     });
//     setPreviews(product.images.map((img) => `http://localhost:4001${img}`));
//   };

//   return (
//     <div className="skincare-container">
//       <div className="skincare-header">
//         <h2>🧴 Skincare Products</h2>
//         <button className="add-btn" onClick={() => {
//           setShowForm(!showForm);
//           resetForm();
//         }}>
//           {showForm ? "Close Form" : "+ Add Product"}
//         </button>
//       </div>

//       {/* Product Table */}
//       <div className="product-table">
//         <table>
//           <thead>
//             <tr>
//               <th>Image</th>
//               <th>Name</th>
//               <th>Pack</th>
//               <th>Composition</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.length > 0 ? (
//               products.map((p) => (
//                 <tr key={p._id}>
//                   <td>
//                     {p.images?.[0] && (
//                       <img
//                         src={`http://localhost:4001${p.images[0]}`}
//                         alt={p.name}
//                         className="thumb"
//                       />
//                     )}
//                   </td>
//                   <td>{p.name}</td>
//                   <td>{p.packSize}</td>
//                   <td>{p.composition}</td>
//                   <td>
//                     <button className="edit-btn" onClick={() => handleEdit(p)}>Edit</button>
//                     <button className="delete-btn" onClick={() => handleDelete(p._id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr><td colSpan="5">No skincare products found</td></tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Add/Edit Form */}
//       {showForm && (
//         <form className="add-form" onSubmit={handleSubmit}>
//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Product Name"
//             required
//           />
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Description"
//           />
//           <textarea
//             name="composition"
//             value={formData.composition}
//             onChange={handleChange}
//             placeholder="Composition"
//           />
//           <input
//             name="packSize"
//             value={formData.packSize}
//             onChange={handleChange}
//             placeholder="Pack Size (e.g. 50ml)"
//           />
//           <input
//             name="keyPoints"
//             value={formData.keyPoints}
//             onChange={handleChange}
//             placeholder="Key Points (comma separated)"
//           />

//           <label>Upload Images:</label>
//           <input type="file" multiple accept="image/*" onChange={handleFileChange} />

//           <div className="image-preview-grid">
//             {previews.map((src, i) => (
//               <img key={i} src={src} alt="preview" />
//             ))}
//           </div>

//           <button type="submit" className="save-btn">
//             {editingId ? "Update Product" : "Save Product"}
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Skincare;


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Skincare.css";
import envvar from "../../../../index";

const Skincare = () => {
  const [showForm, setShowForm] = useState(false);
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [products, setProducts] = useState([]);

  // Updated schema fields
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    description: "",
    indications: "",
    category: "Skincare",
  });

  // Fetch skincare products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${envvar.baseurl}/product?category=Skincare`);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setPreviews(selectedFiles.map((f) => URL.createObjectURL(f)));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      ingredients: "",
      description: "",
      indications: "",
      category: "Skincare",
    });
    setFiles([]);
    setPreviews([]);
    setEditingId(null);
  };

  // Add / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => data.append(key, val));
      files.forEach((f) => data.append("images", f));

      if (editingId) {
        await axios.put(`${envvar.baseurl}/product/${editingId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("✅ Product updated!");
      } else {
        await axios.post(`${envvar.baseurl}/product`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("✅ Skincare product added!");
      }

      resetForm();
      setShowForm(false);
      fetchProducts();
    } catch (err) {
      console.error("Error saving product:", err);
    }
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`${envvar.baseurl}/product/${id}`);
      alert("🗑️ Product deleted!");
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  // Edit
  const handleEdit = (product) => {
    setEditingId(product._id);
    setShowForm(true);
    setFormData({
      name: product.name,
      ingredients: product.ingredients,
      description: product.description,
      indications: product.indications.join(", "),
      category: product.category,
    });
    setPreviews(product.images.map((img) => `http://localhost:4001${img}`));
  };

  return (
    <div className="skincare-container">
      <div className="skincare-header">
        <h2>🧴 Skincare Products</h2>
        <button
          className="add-btn"
          onClick={() => {
            setShowForm(!showForm);
            resetForm();
          }}
        >
          {showForm ? "Close Form" : "+ Add Product"}
        </button>
      </div>

      {/* Product Table */}
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Ingredients</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p) => (
                <tr key={p._id}>
                  <td>
                    {p.images?.[0] && (
                      <img
                        src={`http://localhost:4001${p.images[0]}`}
                        alt={p.name}
                        className="thumb"
                      />
                    )}
                  </td>
                  <td>{p.name}</td>
                  <td>{p.ingredients?.slice(0, 50)}...</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(p)}>
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(p._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No skincare products found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <form className="add-form" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />

          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="Ingredients (comma separated or paragraph)"
            required
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />

          <input
            name="indications"
            value={formData.indications}
            onChange={handleChange}
            placeholder="Indications (comma separated)"
          />

          <label>Upload Images:</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />

          <div className="image-preview-grid">
            {previews.map((src, i) => (
              <img key={i} src={src} alt="preview" />
            ))}
          </div>

          <button type="submit" className="save-btn">
            {editingId ? "Update Product" : "Save Product"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Skincare;

