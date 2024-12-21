import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavForAll from '../components/NavForAll';

const RentForm = () => {
    const location = useLocation();
    const ownerEmail = location.state?.ownerEmail;

    const [formData, setFormData] = useState({
        aadhar: '',
        phone: '',
        email: '',
        address: '',
        insurance: '',
        proofOfAddress: '',
        reference: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        const mailtoLink = `mailto:${ownerEmail}?subject=Rental Request&body=${encodeURIComponent(
            `Rental Request Details:\nAadhar: ${formData.aadhar}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nAddress: ${formData.address}\nInsurance: ${formData.insurance}\nProof of Address: ${formData.proofOfAddress}\nReference: ${formData.reference}`
        )}`;
        window.location.href = mailtoLink;
    };

    return (
        <>
        <NavForAll/>
        <div className="container my-5">
            <h1 className="text-center mb-4">Rental Request Form</h1>
            <div className="card">
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="aadhar" className="form-label">Aadhar Card</label>
                        <input
                            type="text"
                            id="aadhar"
                            name="aadhar"
                            className="form-control"
                            value={formData.aadhar}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="form-control"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="insurance" className="form-label">Insurance Link</label>
                        <input
                            type="text"
                            id="insurance"
                            name="insurance"
                            className="form-control"
                            value={formData.insurance}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="proofOfAddress" className="form-label">Proof of Address Link</label>
                        <input
                            type="text"
                            id="proofOfAddress"
                            name="proofOfAddress"
                            className="form-control"
                            value={formData.proofOfAddress}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="reference" className="form-label">Reference Link</label>
                        <input
                            type="text"
                            id="reference"
                            name="reference"
                            className="form-control"
                            value={formData.reference}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={handleSubmit}>
                        Submit Request
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default RentForm;