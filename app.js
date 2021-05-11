var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();
//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })
// app.use('/roKit', indexRouter);


app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/',(res,req)=>{
  res.redirect("/roKit");
});

app.use('/roKit', express.static(path.join(__dirname, 'public')));



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
  res.sendFile('public/404.html', { root: __dirname });

 // res.render('error');
});

module.exports = app;
