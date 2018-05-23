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
      .then(listing => console.log("success"))
      .catch(error => console.log(error));
  },
};
