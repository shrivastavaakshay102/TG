// backend/billing-microservice/models/UsageDetailsModel.js

const mongoose = require('mongoose');

const usageDetailsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // Add any other fields for usage details
  metric1: { type: Number, required: true },
  metric2: { type: Number, required: true },
  // ...
});

const UsageDetails = mongoose.model('UsageDetails', usageDetailsSchema);

module.exports = UsageDetails;
