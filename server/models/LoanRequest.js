// const mongoose = require('mongoose');

// const loanRequestSchema = new mongoose.Schema({
//   businessName: {
//     type: String,
//     required: [true, 'Business name is required'],
//   },
//   assets: {
//     type: String,
//     required: [true, 'Assets are required'],
//   },
//   kycInfo: {
//     type: String,
//     required: [true, 'KYC information is required'],
//   },
//   requestedAmount: {
//     type: Number,
//     required: [true, 'Requested loan amount is required'],
//   },
//   reasonForLoan: {
//     type: String,
//     required: [true, 'Reason for loan is required'],
//   },
//   dateSubmitted: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const LoanRequest = mongoose.model('LoanRequest', loanRequestSchema);
// module.exports = LoanRequest;
const mongoose = require('mongoose');

// LoanRequest schema
const loanRequestSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  assets: { type: String, required: true },
  kycInfo: { type: String, required: true },
  requestedAmount: { type: Number, required: true },
  reasonForLoan: { type: String, required: true },
});

const LoanRequest = mongoose.model('LoanRequest', loanRequestSchema);

module.exports = LoanRequest;
