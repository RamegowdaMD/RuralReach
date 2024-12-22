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


module.exports = router;
