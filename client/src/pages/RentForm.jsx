import React from 'react';
import { useLocation } from 'react-router-dom';

const RentForm = () => {
    const { state } = useLocation();
    const { rental } = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Rental request sent to ${rental.email}!`);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Submit Rental Details</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="aadhar" className="form-label">Aadhar Card Number</label>
                    <input type="text" id="aadhar" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="text" id="phone" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea id="address" className="form-control" rows="3" required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="insurance" className="form-label">Insurance Link</label>
                    <input type="text" id="insurance" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="proof" className="form-label">Proof of Address Link</label>
                    <input type="text" id="proof" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="reference" className="form-label">Reference Link</label>
                    <input type="text" id="reference" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary">Send Request</button>
            </form>
        </div>
    );
};

export default RentForm;