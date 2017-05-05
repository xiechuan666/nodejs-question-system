var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const webRouter = require('./routes/web_router');
const flash = require('connect-flash');
const expressMessage = require('express-messages');
const session = require('express-session'); // 添加session
const MongoStore = require('connect-mongo')(session);
const moment = require('moment');

const User = require('./models/user')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('sessiontest'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'sessiontest',
  store: new MongoStore({
    url: 'mongodb://localhost/zy1390',
    ttl: 14 * 24 * 60 * 60 // = 14 days. Default
  }),
  resave: true,
  saveUninitialized: true
}));

app.use(flash());
app.use(function(req, res, next) {
  // res.locals.messages = expressMessage(req, res);
  app.locals.current_user = req.session.email;
  app.locals.moment = moment;
  next();
});

app.use('/', webRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
