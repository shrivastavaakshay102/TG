// BillingController.js

const BillingModel = require('../models/BillingModel'); 


const getBillingInfo = async (req, res) => {
  try {
    
    const billingData = await BillingModel.getBillingInfoForUser(req.user.id); 
    res.status(200).json(billingData);
  } catch (error) {
    console.error('Error fetching billing information:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const generateInvoice = async (req, res) => {
  try {
    
    const invoice = await BillingModel.generateInvoiceForUser(req.user.id); 
    res.status(200).json({ success: true, invoice });
  } catch (error) {
    console.error('Error generating invoice:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getBillingInfo,
  generateInvoice,
};
