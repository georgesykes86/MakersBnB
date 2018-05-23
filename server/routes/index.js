const usersController = require('../controllers').users;
const listingsController = require('../controllers').listings;

module.exports = (app) => {
  app.get('/', (req, res) => res.render('pages/index'));

  app.post('/listings/new', (req, res) => {
    let updatedb = async function(){
    usersController.create(req, res)
      .then(function(user){
        req.body["user_id"] = user.dataValues.id
        console.log("creating listing")
      listingsController.create(req, res)})
  }
  console.log("updating records")
  updatedb();
  });

  app.get('/listings', listingsController.findWithUser );
}
