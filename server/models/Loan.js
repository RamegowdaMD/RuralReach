const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema(
  {
    loanReceiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users', // Link to the loan receiver
      required: true
    },
    amountRequested: {
      type: Number,
      required: true
    },
    loanPurpose: {
      type: String,
      required: true
    },
    loanTerm: {
      type: String, // Example: '12 months', '3 years', etc.
      required: true
    },
    repaymentPlan: {
      type: String,
      required: true
    },
    loanStatus: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    },
    dateRequested: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

const LoanModel = mongoose.model('Loans', LoanSchema);

module.exports = LoanModel;
