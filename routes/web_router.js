var express = require('express');
var router = express.Router();

const user = require('./user/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index');
});

/* register page. */
router
  .get('/register', user.showRegister)
  .post('/register', user.register)

router
  .get('/login', user.showLogin)
  .post('/login', user.login)

module.exports = router;
