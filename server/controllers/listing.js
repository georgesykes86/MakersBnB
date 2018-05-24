const Listing = require('../models').Listing;
const User = require('../models').User;

module.exports = {
  create(req, res) {
    return Listing
      .create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        dates: req.body.dates,
        user_id: req.body.user_id,
      })
      .then(listing => {return true})
      .catch(error => {return false});
  },

  findAll(req, res) {
    return Listing
      .findAll()
      .then(listings => { return listings })
      .catch(error => console.log(error));
  },

  findWithUser(req, res) {
    return Listing
      .findAll({
        include: [{
          model: User,
        }],
      })
      .then(listings => res.status(200).send(listings))
      .catch(error => console.log(error));
  }
};
