const mongoose = require('../config/mongoose').mongoose;

var schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', schema);
