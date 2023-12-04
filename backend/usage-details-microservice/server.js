// backend/usage-details-microservice/server.js

const express = require('express');
const mongoose = require('mongoose');
const usageRoutes = require('./routes/UsageRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/usagedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define routes
app.use('/usage', usageRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
