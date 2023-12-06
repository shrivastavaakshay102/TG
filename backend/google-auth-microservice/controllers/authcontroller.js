// backend/auth-microservice/controllers/AuthController.js

const User = require('../models/user');


const getUserProfile = async (req, res) => {
  try {
    
    const userProfile = await User.findOne({ googleId: req.user.googleId });
    res.json(userProfile);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getUserProfile,
  
};
