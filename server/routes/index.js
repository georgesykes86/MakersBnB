const usersController = require('../controllers').users;
const listingsController = require('../controllers').listings;

module.exports = (app) => {
  app.get('/user/:id', (req, res) =>
   res.render('pages/index', { username: req.session.username}));

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

  app.get('/sessions/new', (req, res) => {
    res.render('pages/login', { message: req.flash('error' )})
  });

  app.post('/session', async function(req, res){
    let users = await usersController.findByEmail(req, res)
    console.log(users)
    if (users.length > 0){
      var user = users[0].dataValues
      if (user.password === req.body.log_password) {
        req.session.username = user.name
        req.session.id = user.id
        res.redirect('/user/${user.id}')
      } else{
          console.log("wrong password")
      }
    } else {
      req.flash('error', 'no username')
      console.log("hitting error")
      res.redirect('/sessions/new')
    }

  });
}
