const mongoose = require('../config/mongoose').mongoose;

var schema = new mongoose.Schema({
  title: {type: String, required: true},
  article: {type: String, required: true},
  author: String,
  // author: {type: Schema.Types.ObjectId, ref: 'User'},
  created: {type: Date}
});

module.exports = mongoose.model('Ques', schema, 'questions');
