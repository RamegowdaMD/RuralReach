import React from 'react';
import { Link } from 'react-router-dom';

const NavDTC = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">D2C Marketplace</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Return to Homepage</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/list-product">List Product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/track-sales">Track Product Sales</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavDTC;