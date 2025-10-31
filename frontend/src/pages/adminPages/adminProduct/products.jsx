

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";
import envvar from "../../../index";

const ProductManager = () => {
  const [showForm, setShowForm] = useState(false);
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    description: "",
    indications: "",
    category: "",
  });

  useEffect(() => {
    axios.get(`${envvar.baseurl}/category`).then((res) => setCategories(res.data));
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${envvar.baseurl}/product`);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

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
      category: "",
    });
    setFiles([]);
    setPreviews([]);
    setEditingId(null);
  };

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
        alert("✅ New product added!");
      }

      setShowForm(false);
      resetForm();
      fetchProducts();
    } catch (err) {
      console.error("Error saving product:", err);
    }
  };

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
    setPreviews(product.images.map((img) => `${envvar.url}${img}`));
  };

  return (
    <div className="product-manager-container">
      <div className="product-header">
        <h2>🧴 Product Manager</h2>
        <button
          className="add-btn"
          onClick={() => {
            setShowForm(true);
            resetForm();
          }}
        >
          + Add Product
        </button>
      </div>

      {/* 📋 Product Table */}
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
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
                        src={`${p.images[0]}`}
                        alt={p.name}
                        className="thumb"
                      />
                    )}
                  </td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
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
                <td colSpan="5">No products found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 🧾 Modal Form */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{editingId ? "Edit Product" : "Add Product"}</h3>
            <form className="add-form" onSubmit={handleSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product Name"
                required
              />

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                placeholder="Ingredients"
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

              <div className="modal-buttons">
                <button type="submit" className="save-btn">
                  {editingId ? "Update Product" : "Save Product"}
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManager;
