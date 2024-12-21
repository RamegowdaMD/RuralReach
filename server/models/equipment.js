const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema(
  {
    equipmentProviderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users', // Link to the equipment provider
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String, // Example: 'tractor', 'harvester', etc.
      required: true
    },
    description: {
      type: String,
      required: true
    },
    rentalPricePerDay: {
      type: Number,
      required: true
    },
    availability: {
      type: Boolean,
      default: true
    },
    condition: {
      type: String, // Example: 'new', 'good', 'needs repair'
      required: true
    },
    location: {
      type: String,
      required: true
    },
    images: [String] // Array of image URLs of the equipment
  },
  { timestamps: true }
);

const EquipmentModel = mongoose.model('Equipment', EquipmentSchema);

module.exports = EquipmentModel;
