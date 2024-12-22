import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/MarketAnalyticsPage.css'; // Corresponding CSS file for styling
import image1 from '../assets/Kashmiri_Apples.jpg';
import image2 from '../assets/Amritsari_Pickles.jpg';
import image3 from '../assets/Coconut_Oil_(Handmade).jpg';
import image4 from '../assets/Banana_Leaf.jpg';
import image5 from '../assets/Organic_Tea_Leaves.jpg';
import image6 from '../assets/Handmade_Jute_Bags.jpg';
import image7 from '../assets/Alphonso_Mangoes.jpg';
import image8 from '../assets/Handmade_Pottery.jpg';
import scattered from '../assets/scattered.png'; // New image for scattered clouds
import overcast from '../assets/overcast.png'; // New image for overcast clouds
import NavForAll from '../components/NavForAll';

const MarketAnalyticsPage = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [products, setProducts] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherImage, setWeatherImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = '03f17838d62bb17d355415bccca16b0d'; // Replace with your API key

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

  const fetchWeatherData = async (lat, lon) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://api.agromonitoring.com/agro/1.0/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      setWeatherData(response.data);

      // Determine the image based on weather description
      const weatherDescription = response.data.weather[0].description.toLowerCase();
      if (weatherDescription.includes('scattered clouds')) {
        setWeatherImage(scattered);
      } else if (weatherDescription.includes('overcast clouds')) {
        setWeatherImage(overcast);
      } else {
        setWeatherImage(''); // No image for other conditions
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch weather data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    setProducts(productsData[region] || []);
    const coordinates = regionCoordinates[region];
    if (coordinates) {
      fetchWeatherData(coordinates.lat, coordinates.lon);
    }
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

        <div className="weather-data">
          {loading ? (
            <p>Loading weather data...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : weatherData ? (
            <div>
              <h2>Weather Data for {selectedRegion}</h2>
              <p>Temperature: {weatherData.main.temp}°C</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Weather: {weatherData.weather[0].description}</p>
              {weatherImage && (
                <img
                  src={weatherImage}
                  alt="Weather Condition"
                  style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                />
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MarketAnalyticsPage;
