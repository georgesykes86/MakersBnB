const express = require('express');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('connect-flash');
const expressSession = require('express-session');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(expressSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));
app.use(flash());

app.set('view engine', 'ejs');

require('./server/routes')(app);

module.exports = app;
