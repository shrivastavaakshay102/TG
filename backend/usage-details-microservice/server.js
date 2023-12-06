// backend/usage-details-microservice/server.js

const express = require('express');
const mongoose = require('mongoose');
const usageRoutes = require('./routes/UsageRoutes');

const app = express();
const PORT = process.env.PORT || 3001;


mongoose.connect('mongodb://localhost:27017/usagedb', {

});


app.use('/usage', usageRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
