import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavDTC from '../components/NavDTC';
import img1 from '../assets/peda.jpg';
import img2 from '../assets/jilebi.jpg';
import img3 from '../assets/Sorghum.jpg';
import img4 from '../assets/mitai.jpg';
import img5 from '../assets/Proso Millet.jpg';
import img6 from '../assets/Finger Millet.jpg';


const ProductList = () => {
  // Sample product data with images
  const products = [
    { id: 1, name: 'Product 1', price: 25.99, quantity: 10, image: img1, category: 'Sweets' },
    { id: 2, name: 'Product 2', price: 15.49, quantity: 5, image: img2, category: 'Sweets' },
    { id: 3, name: 'Product 3', price: 50.0, quantity: 3, image: img3, category: 'Millet' },
    { id: 4, name: 'Product 4', price: 30.75, quantity: 8, image: img4, category: 'Sweets' },
    { id: 5, name: 'Product 5', price: 22.99, quantity: 12, image: img5, category: 'Millet' },
    { id: 6, name: 'Product 6', price: 12.49, quantity: 20, image: img6, category: 'Millet' },
  ];

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Filtered products based on search and category
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || product.category === selectedCategory)
  );

  return (
    <>
      <NavDTC />
      <div
        className="page-wrapper"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className="container mt-4">
          <h2 className="text-center mb-4">Available Products</h2>

          {/* Search and Filter Section */}
          <div className="mb-4 d-flex flex-column flex-md-row align-items-md-center justify-content-md-between">
            <input
              type="text"
              className="form-control mb-2 mb-md-0"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ maxWidth: '300px' }}
            />
            <select
              className="form-select ms-md-2"
              style={{ maxWidth: '200px' }}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Sweets">Sweets</option>
              <option value="Millet">Millet</option>
              <option value="Accessories">Accessories</option>
              <option value="Home">Home</option>
            </select>
          </div>

          <div className="row">
            {filteredProducts.length === 0 ? (
              <p className="text-center">No products found. Please adjust your search or filter.</p>
            ) : (
              filteredProducts.map((product) => (
                <div className="col-md-4 col-sm-6" key={product.id}>
                  <div className="card mb-4">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="card-img-top"
                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                      />
                    ) : (
                      <div
                        className="card-img-top d-flex align-items-center justify-content-center"
                        style={{
                          height: '200px',
                          backgroundColor: '#f0f0f0',
                          color: '#888',
                          fontSize: '18px',
                        }}
                      >
                        No Image
                      </div>
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">Price: ${product.price}</p>
                      <p className="card-text">
                        {product.quantity > 5 ? (
                          <span className="text-success">In Stock</span>
                        ) : product.quantity > 0 ? (
                          <span className="text-warning">Low Stock</span>
                        ) : (
                          <span className="text-danger">Out of Stock</span>
                        )}
                      </p>
                      <Link
                        to={`/buy-product/${product.id}`}
                        className={`btn btn-primary ${product.quantity === 0 ? 'disabled' : ''}`}
                      >
                        Buy
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
