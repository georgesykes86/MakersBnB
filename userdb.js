const userdb = require('./server/controllers/user.js')
var req = {
  body: {
    name: "Funky Fred",
    email: "funky_fred@funkyfred.fr",
    phone: 7346873468
  }
}

var res = {
  status: function(err){
    var error = err
    function send(err){console.log("Our errors are" + err)}
  }
}

console.log(res.status)

userdb.create(req, res)
