require('dotenv').config()

const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userInfoDB');

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.SERVER_PORT + "/api/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.findOrCreate({
      username: profile.displayName,
      googleId: profile.id,
      email:profile.emails[0].value
    }, function(err, user) {
      return cb(err, user);
    });
  }
));

exports.googleAuth = passport.authenticate('google', {
    scope: ["email", "profile"]
  });

exports.googleAuthCallback = passport.authenticate('google', {
    successRedirect: process.env.CLIENT_PORT + '/login',
    failureRedirect: process.env.CLIENT_PORT + '/register'
  });

exports.passport = passport;

exports.register = function(req, res) {

  const name = req.body.firstName + ' ' + req.body.lastName;

  User.register({
    username: name,
    email: req.body.email
  }, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function() {

      });
    }
  });
  res.status(200).json();
}
