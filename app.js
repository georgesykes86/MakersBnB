const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

var listings = []

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('pages/index'));

app.post('/listings/new', function(req, res) {
  var listing = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price
  }
  listings.push(listing);
  res.redirect('/');
});

app.get('/listings', function(req,res) {
  res.send(listings);
});

module.exports = app;
