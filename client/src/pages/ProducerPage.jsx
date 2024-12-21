import React, { useState } from 'react';
import axios from 'axios';  // Import axios for HTTP requests
import '../css/ProducerPage.css';
import NavForAll from '../components/NavForAll';

const ProducerPage = () => {
  const [producerInfo, setProducerInfo] = useState({
    businessName: '',
    assets: '',
    kycInfo: '',
    requestedAmount: '',
    reasonForLoan: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducerInfo({ ...producerInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the loan request to the backend using axios
      const response = await axios.post('http://localhost:5000/api/submit', producerInfo);

      // Show success message
      setSuccessMessage(response.data.message);
      setErrorMessage('');

      // Reset the form fields
      setProducerInfo({
        businessName: '',
        assets: '',
        kycInfo: '',
        requestedAmount: '',
        reasonForLoan: '',
      });
    } catch (error) {
      setErrorMessage('Error submitting loan request');
      setSuccessMessage('');
    }
  };

  return (
    <>
      <NavForAll />
      <div className="producer-page">
        <h1>Producer Loan Request</h1>

        {/* Show success or error messages */}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Business Name</label>
            <input
              type="text"
              name="businessName"
              value={producerInfo.businessName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Assets</label>
            <input
              type="text"
              name="assets"
              value={producerInfo.assets}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>KYC Information</label>
            <textarea
              name="kycInfo"
              value={producerInfo.kycInfo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Requested Loan Amount</label>
            <input
              type="number"
              name="requestedAmount"
              value={producerInfo.requestedAmount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Reason for Loan</label>
            <textarea
              name="reasonForLoan"
              value={producerInfo.reasonForLoan}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit Loan Request</button>
        </form>
      </div>
    </>
  );
};

export default ProducerPage;
