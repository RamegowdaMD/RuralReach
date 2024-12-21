const express = require('express');
const mongoose = require('mongoose');
const LoanRequest = require('../models/LoanRequest');  // Adjust path as needed
const router = express.Router();

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/YourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// POST route to handle loan request submission
router.post('/submit', async (req, res) => {
  const { businessName, assets, kycInfo, requestedAmount, reasonForLoan } = req.body;

  try {
    const newLoanRequest = new LoanRequest({
      businessName,
      assets,
      kycInfo,
      requestedAmount,
      reasonForLoan,
    });

    // Save the loan request to the database
    await newLoanRequest.save();

    res.status(201).json({ message: 'Loan request submitted successfully' });
  } catch (error) {
    console.error('Error submitting loan request:', error);
    res.status(500).json({ error: 'Error submitting loan request', details: error.message });
  }
});

module.exports = router;
