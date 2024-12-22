import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/CompanyPage.css';

const CompanyPage = () => {
  const [loanRequests, setLoanRequests] = useState([]);
  const [investmentAmount, setInvestmentAmount] = useState('');

  // Fetch loan requests from the backend
  useEffect(() => {
    const fetchLoanRequests = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/loans/loan-requests');
        setLoanRequests(response.data);
      } catch (error) {
        console.error('Error fetching loan requests:', error);
      }
    };

    fetchLoanRequests();
  }, []);

  const handleInvestmentChange = (e) => {
    setInvestmentAmount(e.target.value);
  };

  const handleInvest = (e, loanId) => {
    e.preventDefault();
    // Handle investment submission logic here
    console.log(`Investing $${investmentAmount} in loan ID: ${loanId}`);
  };

  const handleReview = (e, loanId) => {
    e.preventDefault();
    // Handle review submission logic here
    console.log('Review submitted for loan ID:', loanId);
  };

  return (
    <div className="company-page container py-5">
      <h1 className="text-center mb-4">Company Loan Investments</h1>
      <div className="loan-requests row">
        {loanRequests.map((loan) => (
          <div key={loan._id} className="loan-request col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">{loan.businessName}</h3>
                <p>Requested Amount: ${loan.requestedAmount}</p>
                <p>Reason for Loan: {loan.reasonForLoan}</p>
                <p>KYC Info: {loan.kycInfo}</p>
                <form onSubmit={(e) => handleInvest(e, loan._id)} className="mb-2">
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={handleInvestmentChange}
                    className="form-control mb-2"
                    placeholder="Investment Amount"
                    required
                  />
                  <button type="submit" className="btn btn-primary w-100">
                    Invest
                  </button>
                </form>
                <form onSubmit={(e) => handleReview(e, loan._id)}>
                  <textarea
                    className="form-control mb-2"
                    placeholder="Leave a review"
                    required
                  ></textarea>
                  <button type="submit" className="btn btn-secondary w-100">
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyPage;
