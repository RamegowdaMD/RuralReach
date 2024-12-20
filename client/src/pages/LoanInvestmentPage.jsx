import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LoanInvestmentPage.css"; // Assume a CSS file for styling

const LoanInvestmentPage = () => {
  const [producers, setProducers] = useState([]);
  const [selectedProducer, setSelectedProducer] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [message, setMessage] = useState("");

  // Fetch producer data from the backend
  useEffect(() => {
    axios
      .get("/api/producers") // Replace with your API endpoint
      .then((response) => {
        setProducers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching producers:", error);
      });
  }, []);

  // Handle investment submission
  const handleInvestment = (e) => {
    e.preventDefault();
    if (!selectedProducer || !investmentAmount) {
      setMessage("Please select a producer and enter an amount.");
      return;
    }

    axios
      .post("/api/invest", {
        producerId: selectedProducer,
        amount: investmentAmount,
      })
      .then((response) => {
        setMessage(response.data.message);
        setInvestmentAmount("");
        setSelectedProducer(null);
      })
      .catch((error) => {
        console.error("Error making investment:", error);
        setMessage("Failed to process investment. Please try again.");
      });
  };

  return (
    <div className="loan-investment-page">
      <h1>Loan Investment for Producers</h1>
      <p>Support producers by investing in their growth and success.</p>

      {message && <div className="message">{message}</div>}

      <form onSubmit={handleInvestment} className="investment-form">
        <div className="form-group">
          <label htmlFor="producer">Select Producer:</label>
          <select
            id="producer"
            value={selectedProducer || ""}
            onChange={(e) => setSelectedProducer(e.target.value)}
          >
            <option value="" disabled>
              Choose a producer
            </option>
            {producers.map((producer) => (
              <option key={producer.id} value={producer.id}>
                {producer.name} - {producer.location}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Investment Amount:</label>
          <input
            type="number"
            id="amount"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <button type="submit" className="submit-button">
          Invest Now
        </button>
      </form>

      <div className="producers-list">
        <h2>Available Producers</h2>
        {producers.length > 0 ? (
          <ul>
            {producers.map((producer) => (
              <li key={producer.id}>
                <h3>{producer.name}</h3>
                <p>Location: {producer.location}</p>
                <p>Funding Goal: ${producer.fundingGoal}</p>
                <p>Raised: ${producer.raisedAmount}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading producers...</p>
        )}
      </div>
    </div>
  );
};

export default LoanInvestmentPage;
