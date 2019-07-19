// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// post route for adding a user
app.post('/users', function(req, res) {
   console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
   res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
   console.log("listening on port 8000");
});


const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.post('/sessions', (req, res) => {
   console.log(" req.body: ", req.body);
   User.findOne({email:req.body.email, password: req.body.password}, (err, user) => {
      if (err) {
         // Code...
      }
      else {
         // Code...
            req.session.user_id = user._id;
            req.session.email = user.email;
       }
   })
})
