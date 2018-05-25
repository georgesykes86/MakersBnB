const usersController = require('../controllers').users;
const listingsController = require('../controllers').listings;

module.exports = (app) => {
  app.get('/', (req, res) => res.render('pages/index'));

  app.post('/listings/new', async function(req, res){
    let updatedb = async function(){
    usersController.create(req, res)
      .then(async function(user){
        req.body["user_id"] = user.dataValues.id
        await listingsController.create(req, res)})
      }
   await updatedb();
   res.redirect('/')
  });

  app.get('/listings', listingsController.findWithUser );

  app.get('/property/:id', async function(req, res) {
    let listing = await listingsController.findListing(req, res)
    if(listing){
      console.log(listing)
      return res.render('pages/property', { my_listing: listing })
    } else {
      redirect('/')
    }
  });
}
