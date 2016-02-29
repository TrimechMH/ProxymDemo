/**
 * server.js 
 * @author  TrimecheMH
 * @Copyright Proxym-it 
 * Created at 2/22/2016
 * Last update at "change me"
 * Module server
 * write your description here !!!
 */

var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'src')));


app.get('/', function(req, res, next) {
    console.log('hello');
    res.sendFile('src/index.html');
});

app.listen(port);
console.log('The magic happens on port ' + port);
