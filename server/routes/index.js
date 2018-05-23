const usersController = require('../controllers').users;
const listingsController = require('../controllers').listings;

module.exports = (app) => {
  app.get('/', (req, res) => res.render('pages/index'));

  app.post('/listings/new', listingsController.create);

  app.get('/listings', (req, res) => listingsController.findAll(req,res));
}
