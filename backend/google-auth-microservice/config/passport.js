// backend/auth-microservice/config/passportConfig.js

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/UserModel');

passport.use(new GoogleStrategy({
  clientID: 'your-google-client-id',
  clientSecret: 'your-google-client-secret',
  callbackURL: 'http://localhost:3000/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
      // User already exists, return the existing user
      return done(null, existingUser);
    }

    // Create a new user
    const newUser = new User({
      googleId: profile.id,
      displayName: profile.displayName,
      // Add any other user-related fields as needed
    });

    // Save the new user to the database
    await newUser.save();

    // Return the new user
    done(null, newUser);
  } catch (error) {
    done(error, null);
  }
}));

// Serialize user information into session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user information from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
