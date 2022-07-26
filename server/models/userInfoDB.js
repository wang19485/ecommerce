const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect('mongodb://localhost:27017/userInfoDB');

const userSchema = new mongoose.Schema({
  googleId: String,
  username: String,
  email: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

module.exports = User;
