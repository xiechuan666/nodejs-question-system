const Ques = require('../../models/question')

exports.showCreate = (req, res) => {
  res.render('pages/sub/create');
};

exports.create = (req, res) => {
  let _req = req.body;
  let [title, tab, article] = [_req.title, _req.tab, _req.textEdit];
  let author = req.session.email;
  Ques.create({
    title: title,
    article: article,
    tab: tab,
    create: Date.now(),
    author: author
  }, err => {
    if (err) next (err);
    res.render('pages/sub/create');
  })
}
