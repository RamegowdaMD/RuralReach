const mongoose = require('mongoose');

// Schema for scientific consultation requests
const consultationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Users', 
    required: true 
  }, // Link to the User who is requesting the consultation
  consultationType: { 
    type: String, 
    enum: ['Soil Testing', 'Crop Health Analysis', 'Farming Advice'],
    required: true 
  }, // Type of consultation requested
  requestDate: { 
    type: Date, 
    default: Date.now 
  }, // Date when the consultation request was made
  status: { 
    type: String, 
    enum: ['Pending', 'In Progress', 'Completed'], 
    default: 'Pending' 
  }, // Status of the consultation
  details: { 
    type: String, 
    required: true 
  }, // Additional details or description of the request
  assignedScientist: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Scientist' 
  }, // Scientist assigned to the request (optional)
  response: {
    type: String,
    default: null // Scientist's response or analysis, if applicable
  },
  followUp: {
    type: Boolean,
    default: false // Whether follow-up is required after consultation
  },
  followUpDetails: { 
    type: String,
    default: null // Further instructions or information for follow-up
  }
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('Consultation', consultationSchema);
