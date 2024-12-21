import React from 'react';
import { Link } from 'react-router-dom';
import NavDTC from '../components/NavDTC';

const ProductList = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 25.99,
      quantity: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.49,
      quantity: 5,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 50.00,
      quantity: 3,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 30.75,
      quantity: 8,
    },
    {
      id: 5,
      name: 'Product 5',
      price: 22.99,
      quantity: 12,
    },
    {
      id: 6,
      name: 'Product 6',
      price: 12.49,
      quantity: 20,
    },
  ];

  return (
    <>
      <NavDTC />
      <div className="container mt-4">
        <h2>Available Products</h2>
        <div className="row">
          {products.length === 0 ? (
            <p>No products available. Please list a product.</p>
          ) : (
            products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: ${product.price}</p>
                    <p className="card-text">Quantity: {product.quantity}</p>
                    {/* Update the link to use the correct URL format */}
                    <Link to={`/buy-product/${product.id}`} className="btn btn-primary">Buy</Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
