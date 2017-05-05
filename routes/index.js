const Ques = require('../models/question');

exports.Index = (req, res) => {
  if(req.session.email) {
     Ques.find({'author': 'Simon'})
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

