// backend/auth-microservice/models/UserModel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  displayName: { type: String, required: true },
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
