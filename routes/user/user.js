var express = require('express');
var router = express.Router();

/* register page. */
exports.showRegister = (req, res) => {
  res.render('pages/register');
}

exports.register = (req, res) => {
}

