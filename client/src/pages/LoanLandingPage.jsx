import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoanLandingPage.css';
import NavForAll from '../components/NavForAll';

const LoanLandingPage = () => {
    const navigate = useNavigate();
  
   
    const handleProducerClick = () => {
      navigate('/loan/producer'); 
    };
  
    
    const handleInvestorClick = () => {
      navigate('/loan/investor');
    };

  return (
    <>
    <NavForAll/>
    <div className="landing-page">
      <h1>Welcome to the Loan Investment Platform</h1>
      <p>Choose your role to get started:</p>
      <div className="buttons-container">
        <button className="role-button" onClick={handleProducerClick}>
          For Producers
        </button>
        <button className="role-button" onClick={handleInvestorClick}>
          For Investors
        </button>
      </div>
    </div>
    </>
  );
};

export default LoanLandingPage;
