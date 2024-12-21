import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfPic from "../assets/profile.png";

const NavForAll = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          RuralReach
        </Link>

        {/* Mobile Toggle Button */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/loan/investor">
                Become an Investor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/more">
                More
              </Link>
            </li>
          </ul>

          {/* Right Section - Profile Pic and Sidebar */}
          <div className="d-flex align-items-center">
            <Link to="/register" className="btn btn-outline-primary me-2">
              Offers
            </Link>
            <img
              src= {ProfPic}
              alt="Profile"
              className="rounded-circle me-2"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="position-fixed top-0 end-0 vh-100 bg-white shadow-lg"
          style={{
            width: "300px",
            zIndex: 1050,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <div className="p-3">
            <button
              className="btn btn-primary mb-3 w-100"
              onClick={() => navigate('/profile')}
            >
              Profile
            </button>
            <button
              className="btn btn-danger mb-3 w-100"
              onClick={toggleSidebar}
            >
              Close
            </button>
            <h4>User Details</h4>
            <hr />
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Member Since:</strong> January 2023</p>
            <p>
              <strong>Role:</strong> Producer
            </p>
            <button className="btn btn-outline-danger mt-5 w-100">
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavForAll;
