const mongoose = require('mongoose');

// 创建数据库
mongoose.connect('mongodb://localhost/zy1390');

// 注册schema
var schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', schema);
