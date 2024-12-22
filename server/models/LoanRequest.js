const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const investmentSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const loanRequestSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  assets: { type: String, required: true },
  kycInfo: { type: String, required: true },
  requestedAmount: { type: Number, required: true },
  reasonForLoan: { type: String, required: true },
  investments: [investmentSchema], 
  reviews: [reviewSchema], 
});

const LoanRequest = mongoose.model('LoanRequest', loanRequestSchema);

module.exports = LoanRequest;
