import React, { useState } from "react";
import "../css/ProducerPage.css";
import NavForAll from "../components/NavForAll";
import Footer from "../components/footer";

const ProducerPage = () => {
  const [producerInfo, setProducerInfo] = useState({
    businessName: "",
    assets: "",
    kycInfo: "",
    requestedAmount: "",
    reasonForLoan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducerInfo({ ...producerInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/loans/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producerInfo),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Loan request submitted successfully!');
        console.log('Loan request submitted successfully:', data);
      } else {
        alert(`Error: ${data.error || 'Something went wrong!'}`);
        console.error('Error:', data);
      }
    } catch (error) {
      alert('Error submitting loan request. Please try again.');
      console.error('Error submitting loan request:', error);
    }
  };

  return (

    <div className="producer-wrapper bg-light pt-5">
    <NavForAll />
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">Producer Loan Request</h1>
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
            <div className="mb-3">
              <label className="form-label">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={producerInfo.businessName}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Assets</label>
              <input
                type="text"
                name="assets"
                value={producerInfo.assets}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
  
            <div className="mb-3">
              <label className="form-label">KYC Information</label>
              <textarea
                name="kycInfo"
                value={producerInfo.kycInfo}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              />
            </div>
  
            <div className="mb-3">
              <label className="form-label">Requested Loan Amount</label>
              <input
                type="number"
                name="requestedAmount"
                value={producerInfo.requestedAmount}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
  
            <div className="mb-3">
              <label className="form-label">Reason for Loan</label>
              <textarea
                name="reasonForLoan"
                value={producerInfo.reasonForLoan}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              />
            </div>
  
            <button type="submit" className="btn btn-primary w-100">
              Submit Loan Request
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  
  );
};

export default ProducerPage;
