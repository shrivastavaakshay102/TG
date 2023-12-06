// backend/auth-microservice/config/passportConfig.js

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy({
  clientID: '628754124937-sqg1kdrmphl17099bc74s3srv731qvfu.apps.googleusercontent.com',
  clientSecret: "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",
  callbackURL: 'http://localhost:3000/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
  try {
    
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
      
      return done(null, existingUser);
    }

   
    const newUser = new User({
      googleId: profile.id,
      displayName: profile.displayName,
      
    });

    
    await newUser.save();

    
    done(null, newUser);
  } catch (error) {
    done(error, null);
  }
}));


passport.serializeUser((user, done) => {
  done(null, user.id);
});


passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
