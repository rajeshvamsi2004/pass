const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String // this will be hashed
});

module.exports = mongoose.model('User', userSchema);
