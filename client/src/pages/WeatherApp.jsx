import React, { useState } from 'react';
import axios from 'axios';

// Import weather images
import scattered from './images/scattered-clouds.jpg';
import overcast from './images/overcast-clouds.jpg';

const WeatherApp = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherImage, setWeatherImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your API key

  // Predefined coordinates for regions
  const regionCoordinates = {
    'Region 1': { lat: 37.7749, lon: -122.4194 }, // Example: San Francisco
    'Region 2': { lat: 40.7128, lon: -74.006 },  // Example: New York
    'Region 3': { lat: 51.5074, lon: -0.1278 },  // Example: London
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
    const coordinates = regionCoordinates[region];
    if (coordinates) {
      fetchWeatherData(coordinates.lat, coordinates.lon);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="region-selector">
        <label htmlFor="region">Select a Region:</label>
        <select id="region" value={selectedRegion} onChange={handleRegionChange}>
          <option value="">-- Select a Region --</option>
          {Object.keys(regionCoordinates).map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
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
        ) : (
          <p>Please select a region to view weather data.</p>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
