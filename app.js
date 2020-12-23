var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//引入数据库
require("./utils/commit")


//引入
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var goodRouter = require('./routes/good');


var app = express();

//中间件关联起来
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//添加路由然后引入
app.use('/', require('./routes/index'));
app.use('/api/users',require('./routes/user'));
app.use('/api/goods', require('./routes/good'));
app.use('/api/carts', require('./routes/cart'));
app.use('/api/tijiao', require('./routes/tijiao'));
app.use('/a', require('./routes/kuayu'));






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
