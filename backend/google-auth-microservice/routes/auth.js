// backend/auth-microservice/routes/authRoutes.js

const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google OAuth login
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Redirect to the frontend dashboard or home page after successful login
    res.redirect('/dashboard');
  }
);

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  // Redirect to the frontend home page after logout
  res.redirect('/');
});

module.exports = router;
