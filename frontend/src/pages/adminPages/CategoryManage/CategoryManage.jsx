import React, { useState, useEffect } from "react";
import axios from "axios";
import envvar from "../../../index";
import "./CategoryManage.css";

const CategoryManage = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${envvar.baseurl}/category`);
      setCategories(res.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${envvar.baseurl}/category`, { name, description });
      setName("");
      setDescription("");
      fetchCategories();
      alert("Category added!");
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    try {
      await axios.delete(`${envvar.baseurl}/category/${id}`);
      fetchCategories();
    } catch (err) {
      console.error("Error deleting category:", err);
    }
  };

  return (
    <div className="category-manage-container">
      <h2>📦 Manage Categories</h2>

      <form onSubmit={handleSubmit} className="category-form">
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {/* <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /> */}
        <select
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  required
>
  <option value="">-- Select Type --</option>
  <option value="Section Based">Section Based</option>
  <option value="Indication Based">Indication Based</option>
</select>
        <button type="submit">Add Category</button>
      </form>

      <table className="category-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((c) => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.description}</td>
                <td>
                  <button onClick={() => handleDelete(c._id)}>🗑️ Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No categories found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryManage;
