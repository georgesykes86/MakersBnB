const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
    .create({
      name: req.body.name,
      email: req.body.email,
      phone_nr: req.body.phone,
      password: req.body.password,
    })
    .then(user => { return user })
    .catch(error => { return false });
  },

  retrieve(req, res) {
    return User
      .findById()
      .then(user => res.status(200).send(user))
      .catch(error => console.log(error));
  },

  findByEmail(req, res) {
    return User
    .findOne({
      where: {
        email: req.body.email
      }
    })
    .then(user => { return user })
    .catch(error => { return false });
  }
};
