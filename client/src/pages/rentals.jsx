import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavRental from '../components/NavRental';

const RentalsPage = () => {
    const navigate = useNavigate();
    const [rentalRequests, setRentalRequests] = useState([]);
    const [newRequest, setNewRequest] = useState({
        ownerName: '',
        contact: '',
        email: '',
        type: '',
        description: '',
        rentalInfo: '',
        link: ''
    });

    // Input change handler
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRequest({ ...newRequest, [name]: value });
    };

    // Check if the form fields are valid
    const isValid = () => {
        return (
            newRequest.ownerName &&
            newRequest.contact &&
            newRequest.email.includes('@') &&
            newRequest.type &&
            newRequest.description &&
            newRequest.link
        );
    };

    // Add new rental request
    const handleAddRequest = () => {
        if (!isValid()) {
            alert('Please fill in all fields correctly.');
            return;
        }
        setRentalRequests([...rentalRequests, { ...newRequest, ratings: [], averageRating: 0 }]);
        setNewRequest({
            ownerName: '',
            contact: '',
            email: '',
            type: '',
            description: '',
            rentalInfo: '',
            link: ''
        });
    };

    // Navigate to rent page
    const handleRentNow = (request) => {
        navigate('/rent', { state: { rental: request } });
    };

    useEffect(() => {
        const savedRequests = JSON.parse(localStorage.getItem('rentalRequests')) || [];
        setRentalRequests(savedRequests);
    }, []);

    useEffect(() => {
        localStorage.setItem('rentalRequests', JSON.stringify(rentalRequests));
    }, [rentalRequests]);

    return (
        <>
            <NavRental />
            <div className="container my-5">
                <h1 className="text-center mb-4">Machinery and Vehicle Rentals</h1>

                {/* Display Rental Requests */}
                <h2 className="mb-4">Available Rentals</h2>
                {rentalRequests.length > 0 ? (
                    <div className="row">
                        {rentalRequests
                            .sort((a, b) => b.averageRating - a.averageRating)
                            .map((request, index) => (
                                <div className="col-md-6 col-lg-4 mb-4" key={index}>
                                    <div className="card h-100">
                                        <img
                                            src={request.link}
                                            className="card-img-top"
                                            alt={request.type}
                                            onError={(e) => (e.target.src = 'fallback-image-url.jpg')}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{request.type}</h5>
                                            <p className="card-text"><strong>Owner:</strong> {request.ownerName}</p>
                                            <p className="card-text"><strong>Description:</strong> {request.description}</p>
                                            <p className="card-text"><strong>Contact:</strong> {request.contact}</p>
                                            <p className="card-text"><strong>Email:</strong> {request.email}</p>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => handleRentNow(request)}
                                            >
                                                Rent Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                ) : (
                    <p className="text-center">No rentals available yet. Be the first to add one!</p>
                )}

                {/* Add Rental Request Form */}
                <div className="card mt-5">
                    <div className="card-header">Submit a Rental Request</div>
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="ownerName" className="form-label">Owner Name</label>
                                <input
                                    type="text"
                                    id="ownerName"
                                    name="ownerName"
                                    className="form-control"
                                    value={newRequest.ownerName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="contact" className="form-label">Contact (Phone)</label>
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
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={newRequest.email}
                                    onChange={handleInputChange}
                                />
                            </div>
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
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="rentalInfo" className="form-label">Rental Info Link</label>
                                <input
                                    type="text"
                                    id="rentalInfo"
                                    name="rentalInfo"
                                    className="form-control"
                                    value={newRequest.rentalInfo}
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
            </div>
        </>
    );
};

export default RentalsPage;
