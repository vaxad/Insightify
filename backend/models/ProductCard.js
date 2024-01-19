const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: false,
  },
  brand: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  }
});

const Product = mongoose.model('ProductTest', productSchema);

module.exports = Product;
