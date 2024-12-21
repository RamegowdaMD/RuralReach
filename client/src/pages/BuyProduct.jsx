import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavForAll from "../components/NavForAll";

const BuyProduct = ({ products, onBuy }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id.toString() === id);

  const [quantity, setQuantity] = useState('');
  const [buyerInfo, setBuyerInfo] = useState({ name: '', address: '', contact: '' });

  const handleChange = (e) => {
    setBuyerInfo({ ...buyerInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuy(product.id, parseInt(quantity), buyerInfo);
    navigate('/');
  };

  if (!product) return <p>Product not found!</p>;

  return (
    <>
    <NavForAll/>
    <div className="container mt-4">
      <h2>Buy Product</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Quantity Available:</strong> {product.quantity}</p>
      <p><strong>Owner:</strong> {product.owner}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input type="number" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Address</label>
          <input type="text" className="form-control" name="address" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Contact</label>
          <input type="text" className="form-control" name="contact" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Confirm Order</button>
      </form>
    </div>
    </>
  );
};

export default BuyProduct;