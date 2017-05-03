const crypto = require('crypto');
const User = require('../../models/user');

/* register page. */
exports.showRegister = (req, res) => {
  res.render('pages/register');
}

exports.register = (req, res) => {
  let _req = req.body;
  // 获取用户名 密码 邮箱
  let [name, password, re_password, email] = [_req.name, _req.password, _req.re_password, _req.email];
  
  /* 创建一个md5的hash实例 */
  let md5 = crypto.createHash('md5');
  md5.update(password);
  password = md5.digest('hex')  // 把密码转换成16进制的字符串

  /* 存入数据库 */
  User.create({
    name: name,
    password: password,
    email: email
  }, err => {
    if (err) next (err);
    res.redirect('/');
  })

}

