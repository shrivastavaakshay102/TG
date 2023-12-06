// backend/usage-details-microservice/controllers/UsageController.js

const UsageDetails = require('../models/UsageDetailsModel');


const getUsageDetails = async (req, res) => {
  try {
    
    const usageDetails = await UsageDetails.findOne({ userId: req.params.userId });
    res.json(usageDetails);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getUsageDetails,
  
};
