const Ques = require('../models/question');

exports.Index = (req, res) => {
  if(req.session.user) {
     Ques.find({})
      .sort('created')
      .select('title author created article')
      .exec((err, questions) => {
        // return res.jsonp(questions);
        if (err) return next(err);
        res.render('pages/index', {questions: questions});
      })
  } else {
    res.redirect('/login');
  }
}
