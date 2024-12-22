const express = require('express');
const LoanRequest = require('../models/LoanRequest');

const router = express.Router();


router.post('/submit', async (req, res) => {
  const { businessName, assets, kycInfo, requestedAmount, reasonForLoan } = req.body;

  try {
    const newLoanRequest = await LoanRequest.create({
      businessName,
      assets,
      kycInfo,
      requestedAmount,
      reasonForLoan,
    });

    res.status(201).json({
      message: 'Loan request submitted successfully',
      loanRequest: newLoanRequest,
    });
  } catch (error) {
    console.error('Error submitting loan request:', error);
    res.status(500).json({
      error: 'Error submitting loan request',
      details: error.message,
    });
  }
});

router.get('/loan-requests', async (req, res) => {
  try {
    const loanRequests = await LoanRequest.find(); // Fetch all loan requests from MongoDB
    res.status(200).json(loanRequests);
  } catch (error) {
    console.error('Error fetching loan requests:', error);
    res.status(500).json({ error: 'Error fetching loan requests' });
  }
});

module.exports = router;
