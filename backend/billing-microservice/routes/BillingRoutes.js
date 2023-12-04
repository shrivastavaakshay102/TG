// backend/billing-microservice/routes/billingRoutes.js

const express = require('express');
const router = express.Router();
const { getBillingDetails, generateInvoice } = require('../controllers/BillingController');

// Example: Get billing details for a specific user
router.get('/details/:userId', getBillingDetails);

// Example: Generate an invoice for a specific user
router.post('/generate-invoice/:userId', generateInvoice);

module.exports = router;
