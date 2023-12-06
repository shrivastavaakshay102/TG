// backend/usage-details-microservice/routes/usageRoutes.js

const express = require('express');
const router = express.Router();
const { getUsageDetails } = require('../controllers/UsageController');


router.get('/details/:userId', getUsageDetails);

module.exports = router;
