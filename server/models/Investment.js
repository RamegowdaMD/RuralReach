const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema(
  {
    investorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users', // Link to the investor
      required: true
    },
    loanReceiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users', // Link to the loan receiver
      required: true
    },
    loanId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Loans', // Link to the loan being invested in
      required: true
    },
    investmentAmount: {
      type: Number,
      required: true
    },
    dateInvested: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

const InvestmentModel = mongoose.model('Investments', InvestmentSchema);

module.exports = InvestmentModel;
