const mongoose = require('mongoose');


const loanRequestSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  assets: { type: String, required: true },
  kycInfo: { type: String, required: true },
  requestedAmount: { type: Number, required: true },
  reasonForLoan: { type: String, required: true },
});


const LoanRequest = mongoose.model('LoanRequest', loanRequestSchema);

module.exports = LoanRequest;
