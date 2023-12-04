// backend/auth-microservice/server.js

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const { getUserProfile } = require('./controllers/authcontroller');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/authdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use session to keep track of login state
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Set up Google OAuth strategy
require('./config/passportConfig');

// Define routes
app.use('/auth', authRoutes);

// Example: Protected route that requires authentication
app.get('/profile', getUserProfile);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
