// backend/usage-details-microservice/routes/usageRoutes.js

const express = require('express');
const router = express.Router();
const { getUsageDetails } = require('../controllers/UsageController');

// Example: Get usage details for a specific user
router.get('/details/:userId', getUsageDetails);

module.exports = router;
