// models/Payment.js

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  paymentId: {
    type: String,
    // required: true,
  },
  amount: {
    type: Number,
    // required: true,
  },
  currency: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
