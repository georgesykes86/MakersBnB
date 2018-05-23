const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
var i = 2;

var listings = {
  1: {
    name: "sam",
    email: "sam@gmail.com",
    phone: 07786099392,
    title: "Playboy mansion",
    description: "My first listing",
    price: 50
      }
};

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
  listings[i]=listing;
  i++;
  res.redirect('/');
});

app.get('/listings', function(req,res) {
  res.send(listings);
});

module.exports = app;
