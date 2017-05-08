var express = require('express');
var router = express.Router();

const index = require('./index')
const user = require('./user/user')
const op = require('./op/op')

/* GET home page. */
router
  .get('/', index.Index)

// 注册
router
  .get('/register', user.showRegister)
  .post('/register', user.register)

// 登录
router
  .get('/login', user.showLogin)
  .post('/login', user.login)

// 登出
router
  .get('/logout', user.logout)

// 发布新问题
router
  .get('/create', op.showCreate)
  .post('/create', op.create)
  
module.exports = router;
