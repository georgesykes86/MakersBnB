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

  app.get('/sessions/new', (req, res) => res.render('pages/login'));

  app.post('/session', async function(req, res){
    let users = await usersController.findByEmail(req, res)
    console.log(users)
    if (users){
      console.log("found a user")
      if (users[0].dataValues.password === req.body.log_password) {
          console.log("found a password")
        res.status(200).redirect('/')
      } else{
          console.log("wrong password")
      }
    } else {
      console.log("wrong user")

    }

  });
}
