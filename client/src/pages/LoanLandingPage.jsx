import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoanLandingPage.css';
import NavForAll from '../components/NavForAll';
import  Carousels from '../components/Carousel';
import Footer from '../components/footer';

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
   
    <div
    className="loan-landing-wrapper my-5"
    style={{
      minHeight: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '20px', 
    }}
  >
    
    <div style={{ height: '50px', backgroundColor: '' }}>
  {/* Content */}
</div>

    <Carousels/>
   

    <div className="landing-page pt-5">
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
    </div>
    <Footer/>
    </>
  );
};

export default LoanLandingPage;