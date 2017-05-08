const Ques = require('../models/question');

exports.Index = (req, res) => {
  if(req.session.email) {
     Ques.find({})
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

