import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ onAdd }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    owner: '',
    contact: '',
    email: '',
    image: null, // To store the image file
  });
  const [imagePreview, setImagePreview] = useState(null); // To show the image preview
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      setProduct({ ...product, image: file });

      // Create an image preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { ...product, id: Date.now() };
    onAdd(newProduct);
    navigate('/');
  };

  return (
    <div
      className="page-wrapper"
      style={{
        minHeight: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '20px', // Optional padding for better spacing
      }}
    >
      <div className="container mt-4">
        <h2>List a New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Owner Name</label>
            <input
              type="text"
              className="form-control"
              name="owner"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contact</label>
            <input
              type="text"
              className="form-control"
              name="contact"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Image</label>
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={handleChange}
              required
            />
          </div>

          {/* Display the image preview */}
          {imagePreview && (
            <div className="mb-3">
              <img
                src={imagePreview}
                alt="Product Preview"
                className="img-fluid"
                style={{ maxWidth: '200px' }}
              />
            </div>
          )}

          <button type="submit" className="btn btn-success">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;