const Ques = require('../models/question');

exports.Index = (req, res) => {
  if(req.session.user) {
     Ques.find({})
      .sort({created: -1})
      .select('title author created')
      .exec((err, questions) => {
        // return res.jsonp(questions);
        if (err) return next(err);
        res.render('pages/index', {questions: questions});
      })
  } else {
    res.redirect('/login');
  }
}
