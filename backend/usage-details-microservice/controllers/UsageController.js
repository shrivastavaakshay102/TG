// backend/usage-details-microservice/controllers/UsageController.js

const UsageDetails = require('../models/UsageDetailsModel');

// Example: Get usage details for a specific user
const getUsageDetails = async (req, res) => {
  try {
    // Get usage details based on the user ID
    const usageDetails = await UsageDetails.findOne({ userId: req.params.userId });
    res.json(usageDetails);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getUsageDetails,
  // Add other methods for handling usage details as needed
};
