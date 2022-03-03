var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pruebaRouter = require('./routes/prueba');
var gigiaRouter = require('./routes/gigia');
var gigibRouter = require('./routes/gigib');//MI PAG DE PRUEBA 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/prueba', pruebaRouter);
app.use('/gigia', gigiaRouter);
app.use('/gigib', gigibRouter);//RUTA DE PRUEBA

app.get('/prueba', function(req, res){
  res.send('Hola soy la primera prueba de Gigi')
});
app.get('/gigia', function(req, res){
  res.send('Hola soy la segunda prueba de Gigi')
}); 
app.get('/gigib', function(req, res){
  res.send('Hola soy la tercera prueba de Gigi')
});  //MI PRIMER PRUEBA

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
