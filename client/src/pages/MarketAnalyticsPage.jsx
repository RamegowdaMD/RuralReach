import React, { useState } from 'react';
import '../css/MarketAnalyticsPage.css'; // Corresponding CSS file for styling
import image1 from '../assets/Kashmiri_Apples.jpg';
import image2 from '../assets/Amritsari_Pickles.jpg';
import image3 from '../assets/Coconut_Oil_(Handmade).jpg';
import image4 from '../assets/Banana_Leaf.jpg';
import image5 from '../assets/Organic_Tea_Leaves.jpg';
import image6 from '../assets/Handmade_Jute_Bags.jpg';
import image7 from '../assets/Alphonso_Mangoes.jpg';
import image8 from '../assets/Handmade_Pottery.jpg';
import NavForAll from '../components/NavForAll';

const MarketAnalyticsPage = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [products, setProducts] = useState([]);

  // Coordinates for regions
  const regionCoordinates = {
    'North India': { lat: 34.0837, lon: 74.7973 },
    'South India': { lat: 12.9716, lon: 77.5946 },
    'East India': { lat: 26.8500, lon: 89.3833 },
    'West India': { lat: 19.0760, lon: 72.8777 },
  };

  const productsData = {
    'North India': [
      { id: 1, name: 'Kashmiri Apples', price: '₹120 per kg', img: image1 },
      { id: 2, name: 'Amritsari Pickles', price: '₹200 per jar', img: image2 },
    ],
    'South India': [
      { id: 3, name: 'Coconut Oil (Handmade)', price: '₹300 per liter', img: image3 },
      { id: 4, name: 'Banana Leaf Plates', price: '₹50 per pack', img: image4 },
    ],
    'East India': [
      { id: 5, name: 'Organic Tea Leaves', price: '₹500 per kg', img: image5 },
      { id: 6, name: 'Handmade Jute Bags', price: '₹150 each', img: image6 },
    ],
    'West India': [
      { id: 7, name: 'Alphonso Mangoes', price: '₹1,000 per dozen', img: image7 },
      { id: 8, name: 'Handmade Pottery', price: '₹250 each', img: image8 },
    ],
  };

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    setProducts(productsData[region] || []);
  };

  return (
    <div
      className="scientific-consultation-wrapper"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '20px',
      }}
    >
      <NavForAll />
      <div className="market-analytics-page">
        <h1>Market Analytics</h1>

        <div className="region-dropdown">
          <label htmlFor="region-select">Select Region: </label>
          <select id="region-select" value={selectedRegion} onChange={handleRegionChange}>
            <option value="" disabled>
              Choose a region
            </option>
            {Object.keys(regionCoordinates).map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className="product-list">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            ))
          ) : (
            <p className="no-products">Select a region to view products.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketAnalyticsPage;
