var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signinRouter = require('./routes/signin');
var singupRouter = require('./routes/signup');
var studentsRouter = require('./routes/students');
var clubsRouter = require('./routes/clubs');
var mypageRouter = require('./routes/mypage');
var detailRouter = require('./routes/detail');
var friendsRouter = require('./routes/friends');
var editRouter = require('./routes/edit');
var setInfoRouter = require('./routes/setInfo');
var likeRouter = require('./routes/like');
var reserveRouter = require('./routes/reserve');
var followRouter = require('./routes/follow');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/function", express.static(__dirname + '/function'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signin', signinRouter);
app.use('/signup', singupRouter);
app.use('/students', studentsRouter);
app.use('/clubs', clubsRouter);
app.use('/mypage', mypageRouter);
app.use('/detail', detailRouter);
app.use('/friends', friendsRouter);
app.use('/edit', editRouter);
app.use('/setInfo', setInfoRouter);
app.use('/like', likeRouter);
app.use('/reserve', reserveRouter);
app.use('/follow', followRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
