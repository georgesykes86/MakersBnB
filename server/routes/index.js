const usersController = require('../controllers').users;
const listingsController = require('../controllers').listings;

module.exports = (app) => {

  app.get('/', (req,res) => {
    if (req.session.id) {
      res.redirect(`/users/${req.session.id}`)
    } else {
      res.redirect('/sessions/new')
    }
  });

  app.get('/users/:id', (req, res) => {
    if (req.session.user_id) {
      res.render('pages/index', { username: req.session.username})
    } else {
      res.redirect('/sessions/new')
    }
  });

  app.post('/users/new', (req, res) => {
    if (req.session.user_id) {
      res.render('pages/index', { username: req.session.username})
    } else {
      res.redirect('/sessions/new')
    }
  });

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
    if (users.length > 0){
      var user = users[0].dataValues
      if (user.password === req.body.log_password) {
        req.session.username = user.name;
        req.session.user_id = user.id;
        res.redirect(`/users/${user.id}`)
      } else{
        req.flash('error', 'Incorrect password')
        res.redirect('/sessions/new')
      }
    } else {
      req.flash('error', 'Not a valid email')
      res.redirect('/sessions/new')
    }
  });
}
