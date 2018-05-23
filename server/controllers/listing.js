const Listing = require('../models').Listing;

module.exports = {
  create(req, res) {
    return Listing
      .create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        user_id: 1
      })
      .then(listing => console.log(listing))
      .catch(error => console.log(error));
  },

  findAll(req, res) {
    return Listing
      .findAll()
      .then(listings => res.status(200).send(listings))
      .catch(error => console.log(error));
  }
};
