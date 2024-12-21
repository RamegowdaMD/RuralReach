// src/pages/ProductList.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavDTC from "../components/NavDTC";

const ProductList = () => {
  // Mock data for featured products and categories
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);

  useEffect(() => {
    // Mock featured products
    setFeaturedProducts([
      { id: 1, name: "Fresh Organic Tomatoes", imageUrl: "/images/tomatoes.jpg" },
      { id: 2, name: "Green Leafy Spinach", imageUrl: "/images/spinach.jpg" },
      { id: 3, name: "Crisp Cucumbers", imageUrl: "/images/cucumbers.jpg" },
    ]);

    // Mock product categories
    setProductCategories([
      { id: 1, name: "Vegetables", description: "Fresh and organic vegetables." },
      { id: 2, name: "Fruits", description: "Seasonal and fresh fruits." },
      { id: 3, name: "Grains", description: "Whole grains for healthy meals." },
    ]);
  }, []);

  return (
    <div className="container my-5">
      <NavDTC />

      {/* Featured Products Section */}
      <h1 className="text-center text-success mb-4">Featured Products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {featuredProducts?.map((product) => (
          <div key={product.id} className="col">
            <div className="card shadow-sm">
              <Link to={`/product/${product.id}`} className="text-decoration-none">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-success">{product.name}</h5>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Product Categories Section */}
      <h2 className="text-center text-dark my-5">Product Categories</h2>
      <div className="row">
        {productCategories?.map((category) => (
          <div key={category.id} className="col-md-4 mb-4">
            <div className="card p-4 shadow-sm">
              <h4 className="text-center text-primary">{category.name}</h4>
              <p className="text-center text-muted">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
