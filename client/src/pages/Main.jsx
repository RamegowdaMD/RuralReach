import React from 'react';
import { useLocation } from 'react-router-dom';

function Main() {
  const location = useLocation();
  const { name } = location.state || {}; // Retrieve the user's name passed from Login
  
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-4">Welcome, {name ? name : "User"}!</h1>
        <p className="lead">You have successfully logged in.</p>
        <div className="mt-4">
        </div>
      </div>
    </div>
  );
}

export default Main;
