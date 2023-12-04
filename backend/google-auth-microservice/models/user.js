// backend/auth-microservice/models/UserModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  displayName: { type: String, required: true },
  // Add any other user-related fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
