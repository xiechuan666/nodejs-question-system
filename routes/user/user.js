const crypto = require('crypto');
const User = require('../../models/user');

/* register page. */
exports.showRegister = (req, res) => {
  res.render('pages/register');
}

exports.register = (req, res) => {
  /* 获取用户名 密码 邮箱 * */
  let _req = req.body;
  let [name, password, re_password, email] = [_req.name, _req.password, _req.re_password, _req.email];

  /* 判断两次输入的密码是否一致 */
  if (password !== re_password) {
    console.log('密码不一致')
    res.render('pages/register');
    return;
  }

  // 检查用户输入的账号和邮箱是否已经存在
  User.find({name, email}, (err, result) => {
    if (err) {
      console.log('the err is:', err)
    } else {
      if (result) {
        console.log('账户名或者邮箱被占用啦');
        res.render('pages/register');
      } else {
        saveUser();
      }
    }
  });

  function saveUser () {
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
      if (err) next(err);
      res.redirect('/login');
    })
  }
  

}

/* login page */
exports.showLogin = (req, res) => {
  res.render('pages/login');
}
