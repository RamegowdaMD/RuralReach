import React, { useState } from 'react';
import './CompanyPage.css';

const CompanyPage = () => {
  const [loanRequests, setLoanRequests] = useState([
    {
      id: 1,
      businessName: 'Business A',
      requestedAmount: 50000,
      reason: 'Expansion',
      kycInfo: 'Verified',
      profile: 'Excellent track record',
    },
    {
      id: 2,
      businessName: 'Business B',
      requestedAmount: 20000,
      reason: 'Working capital',
      kycInfo: 'Verified',
      profile: 'Good standing',
    },
  ]);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState('');

  const handleInvestmentChange = (e) => {
    setInvestmentAmount(e.target.value);
  };

  const handleInvest = (e, loanId) => {
    e.preventDefault();
    // Handle the investment here (e.g., send investment to backend)
    console.log(`Investing $${investmentAmount} in loan ID: ${loanId}`);
  };

  const handleReview = (e, loanId) => {
    e.preventDefault();
    // Handle the review submission
    console.log('Review submitted for loan ID:', loanId);
  };

  return (
    <div className="company-page">
      <h1>Company Loan Investments</h1>
      <div className="loan-requests">
        {loanRequests.map((loan) => (
          <div key={loan.id} className="loan-request">
            <h3>{loan.businessName}</h3>
            <p>Requested Amount: ${loan.requestedAmount}</p>
            <p>Reason for Loan: {loan.reason}</p>
            <p>KYC Info: {loan.kycInfo}</p>
            <p>Profile: {loan.profile}</p>
            <form onSubmit={(e) => handleInvest(e, loan.id)}>
              <input
                type="number"
                value={investmentAmount}
                onChange={handleInvestmentChange}
                placeholder="Investment Amount"
                required
              />
              <button type="submit">Invest</button>
            </form>
            <form onSubmit={(e) => handleReview(e, loan.id)}>
              <textarea placeholder="Leave a review" required></textarea>
              <button type="submit">Submit Review</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyPage;
