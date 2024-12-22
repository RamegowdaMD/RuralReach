import React, { useState } from 'react';
import axios from 'axios';
import scattered from '../assets/scattered.png';
import overcast from '../assets/overcast.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavForAll from '../components/NavForAll';

const WeatherApp = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherImage, setWeatherImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = '03f17838d62bb17d355415bccca16b0d'; // Replace with your API key

  // Predefined coordinates for regions
  const regionCoordinates = {
    'Benglore': { lat: 37.7749, lon: -122.4194 }, // Example: San Francisco
    'Mysuru': { lat: 40.7128, lon: -74.006 },  // Example: New York
    'Hassan': { lat: 51.5074, lon: -0.1278 },  // Example: London
  };

  const fetchWeatherData = async (lat, lon) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://api.agromonitoring.com/agro/1.0/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);

      // Determine the image based on weather description
      const weatherDescription = response.data.weather[0].description.toLowerCase();
      if (weatherDescription.includes('scattered clouds')) {
        setWeatherImage(scattered);
      } else if (weatherDescription.includes('overcast clouds')) {
        setWeatherImage(overcast);
      } else {
        setWeatherImage(overcast); // No image for other conditions
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
    const coordinates = regionCoordinates[region];
    if (coordinates) {
      fetchWeatherData(coordinates.lat, coordinates.lon);
    }
  };

  return (
    <>
    <NavForAll/>
    <div className="container mt-5 pt-5">
      <div className="card shadow p-4">
        <h1 className="text-center mb-4">Weather App</h1>
        <div className="mb-4">
          <label htmlFor="region" className="form-label">
            Select a Region:
          </label>
          <select
            id="region"
            className="form-select"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value="">-- Select a Region --</option>
            {Object.keys(regionCoordinates).map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className="weather-data text-center">
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : weatherData ? (
            <div>
              <h2 className="my-4">Weather Data for {selectedRegion}</h2>
              <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
              <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
              <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
              {weatherImage && (
                <img
                  src={weatherImage}
                  alt="Weather Condition"
                  className="img-fluid rounded mt-3"
                  style={{ maxWidth: '300px' }}
                />
              )}
            </div>
          ) : (
            <p className="text-muted">Please select a region to view weather data.</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default WeatherApp;
