
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfPic from '../assets/profile.png';

const NavForAll = ({ user }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2 fixed-top">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand fw-bold text-primary" to="/" style={{ fontSize: '40px' }}>
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
              <a
                href="https://www.instagram.com/iam_sjeevan?igsh=YmxxODVsMWhuMzEz"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-reset"
              >
                Contact Us
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <select
              className="form-select mx-3"
              aria-label="Select Language"
              style={{ maxWidth: '180px', margin: '0 auto' }}
            >
              <option value="english">English</option>
              <option value="french">हिन्दी</option>
              <option value="spanish">ಕನ್ನಡ</option>
              <option value="german">தமிழ்</option>
              <option value="telugu">తెలుగు</option>
            </select>

            {/* Profile Picture */}
            <img
              src={ProfPic}
              alt="Profile"
              className="rounded-circle me-2"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </div>

      {/* Sidebar for User Info */}
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

            {/* Display User Info */}
            {user ? (
              <div>
                <h4>User Details</h4>
                <hr />
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <button className="btn btn-outline-danger mt-5 w-100">
                  Logout
                </button>
              </div>
            ) : (
              <p>Please log in to see profile details.</p>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavForAll;
