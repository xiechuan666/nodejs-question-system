var express = require('express');
var router = express.Router();

const user = require('./user/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'ZY1390 Question System' });
});

/* register page. */
router
  .get('/register', user.showRegister)
  .post('/register', user.register)

module.exports = router;
