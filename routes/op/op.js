const Ques = require('../../models/question');
const mongoose = require('mongoose');

exports.showCreate = (req, res) => {
  res.render('pages/sub/create');
};

exports.create = (req, res) => {
  let _req = req.body;
  let [title, tab, article] = [_req.title, _req.tab, _req.textEdit];
  let author = req.session.user.name;
  Ques.create({
    title: title,
    article: article,
    tab: tab,
    created: Date.now(),
    author: author
  }, err => {
    if (err) next (err);
    res.render('pages/sub/create');
  })
}

exports.detail = (req, res) => {
  if(!req.params.id){
    return next(new Error('no id'))
  }
  var conditions = {};
  conditions._id = mongoose.Types.ObjectId(req.params.id);
  Ques.find(conditions)
    .exec((err, questions) => {
      if (err) next (err);
      res.render('pages/sub/detail', {questions: questions});
    })

}