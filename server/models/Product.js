const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    owner: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String }, // Store the image URL or base64 string
});

module.exports = mongoose.model('Product', productSchema);
