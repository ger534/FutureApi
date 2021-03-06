var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

//import cors module
const cors = require('cors');

var app = express();

//enable all cors
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * routes
 */
 var futureRouter = require('./routes/future');
 var gamesRouter = require('./routes/game');
app.use('/future', futureRouter);
app.use('/games', gamesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    //next(createError(404));
    //res.json({ error: err })
    console.log("error...")
    res.send("<style>.align{text-align:center}</style> <h1 class=\"align\">404 not found</h1>")
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err);
});

module.exports = app;