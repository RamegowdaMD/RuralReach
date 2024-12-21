const express = require('express');
const { check, validationResult } = require('express-validator');
const LoanRequest = require('../models/LoanRequest');

const router = express.Router();

router.post(
  '/submit',
  [
    check('businessName').notEmpty().withMessage('Business name is required'),
    check('assets').notEmpty().withMessage('Assets are required'),
    check('kycInfo').notEmpty().withMessage('KYC information is required'),
    check('requestedAmount')
      .isNumeric()
      .withMessage('Requested amount must be a number'),
    check('reasonForLoan').notEmpty().withMessage('Reason for loan is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { businessName, assets, kycInfo, requestedAmount, reasonForLoan } =
      req.body;

    try {
      const newLoanRequest = new LoanRequest({
        businessName,
        assets,
        kycInfo,
        requestedAmount,
        reasonForLoan,
      });

      await newLoanRequest.save();

      res.status(201).json({ message: 'Loan request submitted successfully' });
    } catch (error) {
      console.error('Error submitting loan request:', error);
      res
        .status(500)
        .json({ error: 'Error submitting loan request', details: error.message });
    }
  }
);

module.exports = router;
