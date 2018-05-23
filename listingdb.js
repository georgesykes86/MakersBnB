const listingdb = require('./server/controllers/listing.js')
var req = {
  body: {
    title: "mY mald",
    description: "jhgkuy",
    price: 50
  }
}

var res = {
  status: function(err){
    var error = err
    function send(err){console.log("Our errors are" + err)}
  }
}

console.log(res.status)

listingdb.create(req, res)
