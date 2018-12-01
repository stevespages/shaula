var createError = require('http-errors');
var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db = new sqlite3.Database('shaula.db');

var indexRouter = require('./routes/index');
var voyagesRouter = require('./routes/voyages');
var manualsRouter = require('./routes/manuals');
var documentsRouter = require('./routes/documents');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/voyages', voyagesRouter);
//app.use('/manuals', manualsRouter);
//app.use('/documents', documentsRouter);

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
