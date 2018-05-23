const Listing = require('../models').Listing;

module.exports = {
  create(req, res) {
    return Listing
      .create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        dates: req.body.dates,
        user_id: 1
      })
      .then(listing => console.log("success"))
      .catch(error => console.log(error));
  },

  findAll(req, res) {
    return Listing
      .findAll()
      .then(listing => console.log(listing))
      .catch(error => console.log(error));
  }
};
