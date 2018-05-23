const usersController = require('../controllers').users;
const listingsController = require('../controllers').listings;

module.exports = (app) => {
  app.get('/', (req, res) => res.render('pages/index'));

  app.post('/listings/new', (req, res) => {
    let updatedb = async function(){
      console.log("creating user")
    usersController.create(req, res)
      .then(function(user){ console.log("creating listing")
      listingsController.create(req, res)})
  }
  console.log("updating records")
  updatedb();
  });

  app.get('/listings', (req, res) => listingsController.findAll(req,res));
}
