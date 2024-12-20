import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                <Link className="navbar-brand" to="/">Rental Platform</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/rentals">Add Rental</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavRental;