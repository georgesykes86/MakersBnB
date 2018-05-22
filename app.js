const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('*', (req, res) => res.status(200).send({
  message: "welcome",
}));

module.exports = app;
