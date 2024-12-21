const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema(
  {
    producerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users', // Link to the producer (renter)
      required: true
    },
    equipmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Equipment', // Link to the rented equipment
      required: true
    },
    rentalStartDate: {
      type: Date,
      required: true
    },
    rentalEndDate: {
      type: Date,
      required: true
    },
    totalRentalCost: {
      type: Number,
      required: true
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid'],
      default: 'pending'
    },
    rentalStatus: {
      type: String,
      enum: ['active', 'completed', 'cancelled'],
      default: 'active'
    },
    deliveryStatus: {
      type: String,
      enum: ['pending', 'delivered'],
      default: 'pending'
    }
  },
  { timestamps: true }
);

const RentalModel = mongoose.model('Rentals', RentalSchema);

module.exports = RentalModel;
