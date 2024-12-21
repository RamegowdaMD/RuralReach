const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
   
    Pincode: String,
    Phone: String,
    Notes: String,
    UserId: String,
    Address: String,
    City: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);