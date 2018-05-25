const usersController = require('../controllers').users;
const listingsController = require('../controllers').listings;

module.exports = (app) => {

  app.get('/', (req,res) => {
    if (req.session.user_id) {
      res.redirect(`/users/${req.session.user_id}`)
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

  app.post('/users', async function(req, res){
    if(req.body.password.length < 4){
      req.flash('error', 'Password not long enough')
      return res.redirect('/sessions/new')
    }
    if(req.body.password !== req.body.conf_password) {
      req.flash('error', 'Passwords do not match')
      return res.redirect('/sessions/new')
    }
    let user = await usersController.findByEmail(req, res)
    if (user){
      req.flash('error', 'Email already registered')
      return res.redirect('/sessions/new')
    } else {
      usersController.create(req, res)
        .then(user => {
          if (user){
            req.session.username = user.dataValues.name;
            req.session.user_id = user.dataValues.id;
            res.redirect(`/users/${req.session.user_id}`)
          } else {
            req.flash('error', 'Database problem please try again')
            res.redirect('/sessions/new')
          }
        })
    }
  });

  app.post('/listings/new', async function(req, res){
    listingsController.create(req, res)
      .then(listing => res.redirect('/'))
  });

  app.get('/listings', listingsController.findWithUser );

  app.get('/sessions/new', (req, res) => {
    if (req.session.user_id) {
      res.redirect(`/users/${req.session.user_id}`)
    } else {
      res.render('pages/login', { message: (req.flash('error') || null) })
    }
  });

  app.post('/sessions', async function(req, res){
    let user = await usersController.findByEmail(req, res)
    if (user){
      if (user.password === req.body.log_password) {
        req.session.username = user.name;
        req.session.user_id = user.id;
        res.redirect(`/users/${req.session.user_id}`)
      } else{
        req.flash('error', 'Incorrect password')
        res.redirect('/sessions/new')
      }
    } else {
      req.flash('error', 'Not a valid email')
      res.redirect('/sessions/new')
    }
  });

  app.post('/logout', (req, res) => {
    console.log("request")
    req.session.destroy();
    console.log("response")
    res.redirect(302, '/sessions/new')
  });
}
