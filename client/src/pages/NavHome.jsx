import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-2">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className=" navbar-brand fw-bold text-primary" to="/">
            RuralReach
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/loan/investor">
                Become a Investor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/more">
                More
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <Link to="/login" className="btn btn-primary me-2">
              Login
            </Link>
            <Link to="/login" className="btn btn-primary me-2">
             Register
            </Link>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
