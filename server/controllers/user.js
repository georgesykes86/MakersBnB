const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
    .create({
      name: req.body.name,
      email: req.body.email,
      phone_nr: req.body.phone,
    })
    .then(user => {return user})
    .catch(error => console.log(error));
  },

  retrieve(req, res) {
    return User
      .findById()
      .then(user => res.status(200).send(user))
      .catch(error => console.log(error));
  },

  findByEmail(req, res) {
    return User
    .findAll({
      where: {
        email: req.body.log_mail
      }
    })
    .then(user => {return user})
    .catch(error => {return false});
  }
};
