// backend/billing-microservice/server.js

const express = require('express');
const mongoose = require('mongoose');
const billingRoutes = require('./routes/billingRoutes');

const app = express();
const PORT = process.env.PORT || 3002;


mongoose.connect('mongodb://localhost:27017/billingdb', {

});


app.use('/billing', billingRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
