const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('pages/index'));

module.exports = app;

