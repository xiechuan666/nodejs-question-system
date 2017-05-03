const User = require('../../models/user');

/* register page. */
exports.showRegister = (req, res) => {
  res.render('pages/register');
}

exports.register = (req, res) => {
  let _req = req.body;
  // 获取用户名 密码 邮箱
  let [name, password, re_password, email] = [_req.name, _req.password, _req.re_password, _req.email];
  User.create({
    name: name,
    password: password,
    email: email
  }, err => {
    if (err) next (err);
    res.redirect('/');
  })
  
}

