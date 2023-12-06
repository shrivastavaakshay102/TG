// backend/billing-microservice/routes/billingRoutes.js

const express = require('express');
const router = express.Router();
const { getBillingInfo, generateInvoice } = require('../controllers/BillingController');


router.get('/details/:userId', getBillingInfo);


router.post('/generate-invoice/:userId', generateInvoice);

module.exports = router;
