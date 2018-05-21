const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

var app = express();

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
