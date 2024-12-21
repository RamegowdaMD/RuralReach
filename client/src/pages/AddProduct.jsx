import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ onAdd }) => {
  const [product, setProduct] = useState({ name: '', price: '', quantity: '', owner: '', contact: '', email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { ...product, id: Date.now() };
    onAdd(newProduct);
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>List a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" name="price" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input type="number" className="form-control" name="quantity" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Owner Name</label>
          <input type="text" className="form-control" name="owner" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact</label>
          <input type="text" className="form-control" name="contact" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;