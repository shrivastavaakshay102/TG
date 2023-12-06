// backend/auth-microservice/server.js

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const { getUserProfile } = require('./controllers/authcontroller');

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/authdb', {

});


app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));


app.use(passport.initialize());
app.use(passport.session());


require('./config/passport');


app.use('/auth', authRoutes);


app.get('/profile', getUserProfile);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
