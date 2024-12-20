// Import necessary modules
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Rentals Page Component
const RentalsPage = () => {
    const [rentalRequests, setRentalRequests] = useState([]);
    const [newRequest, setNewRequest] = useState({
        name: '',
        contact: '',
        type: '',
        description: '',
        rentalPrice: '',
        availability: '',
        link: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRequest({ ...newRequest, [name]: value });
    };

    const handleAddRequest = () => {
        setRentalRequests([...rentalRequests, newRequest]);
        setNewRequest({
            name: '',
            contact: '',
            type: '',
            description: '',
            rentalPrice: '',
            availability: '',
            link: ''
        });
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Machinery and Vehicle Rentals</h1>
            
            <button className="btn btn-secondary mb-4" onClick={() => window.location.href = "/"}>Back to Homepage</button>

            {/* Add Rental Request Form */}
            <div className="card mb-4">
                <div className="card-header">Submit a Rental Request</div>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                value={newRequest.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="contact" className="form-label">Contact Info</label>
                            <input
                                type="text"
                                id="contact"
                                name="contact"
                                className="form-control"
                                value={newRequest.contact}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="type" className="form-label">Type</label>
                            <select
                                id="type"
                                name="type"
                                className="form-select"
                                value={newRequest.type}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Type</option>
                                <option value="Machinery">Machinery</option>
                                <option value="Vehicle">Vehicle</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="rentalPrice" className="form-label">Rental Price</label>
                            <input
                                type="number"
                                id="rentalPrice"
                                name="rentalPrice"
                                className="form-control"
                                value={newRequest.rentalPrice}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="availability" className="form-label">Availability</label>
                            <input
                                type="text"
                                id="availability"
                                name="availability"
                                className="form-control"
                                value={newRequest.availability}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="link" className="form-label">Image Link</label>
                            <input
                                type="text"
                                id="link"
                                name="link"
                                className="form-control"
                                value={newRequest.link}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="form-control"
                            rows="3"
                            value={newRequest.description}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleAddRequest}>Add Request</button>
                </div>
            </div>

            {/* Display Rental Requests */}
            <h2 className="mb-4">Rental Requests</h2>
            <div className="row">
                {rentalRequests.map((request, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="card h-100">
                            <img src={request.link} className="card-img-top" alt={request.type} />
                            <div className="card-body">
                                <h5 className="card-title">{request.name}</h5>
                                <p className="card-text">{request.description}</p>
                                <p className="card-text"><strong>Type:</strong> {request.type}</p>
                                <p className="card-text"><strong>Rental Price:</strong> ${request.rentalPrice}</p>
                                <p className="card-text"><strong>Availability:</strong> {request.availability}</p>
                                <p className="card-text"><strong>Contact:</strong> {request.contact}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RentalsPage;