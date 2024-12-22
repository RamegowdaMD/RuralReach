import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    owner: '',
    contact: '',
    email: '',
    image: null, // To store the image file
  });
  const [imagePreview, setImagePreview] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let key in product) {
      formData.append(key, product[key]);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/products/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Product added:', response.data);
      navigate('/'); // Redirect after successful submission
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  
  return (
    <div
      className="page-wrapper"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '20px',
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
