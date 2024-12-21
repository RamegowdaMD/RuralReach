const express = require('express');
const LoanRequest = require('../models/LoanRequest');

const router = express.Router();

router.post('/submit', async (req, res) => {
  const { businessName, assets, kycInfo, requestedAmount, reasonForLoan } = req.body;

  try {
    const newLoanRequest = new LoanRequest({
      businessName,
      assets,
      kycInfo,
      requestedAmount,
      reasonForLoan
    });

    await newLoanRequest.save();
    res.status(201).json({ message: 'Loan request submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error submitting loan request', details: err });
  }
});

module.exports = router;
