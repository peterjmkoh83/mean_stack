var express = require("express");
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

app.use(session({
   secret: 'keyboardkitteh',
   resave: false,
   saveUninitialized: true,
   cookie: { maxAge: 60000 }
}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');


// app.get('/', function(request, response) {
//    response.send("<h1>Hello Express</h1>");
// })

app.get('/', function (req,res) {
   res.render('index.ejs', {title: "my Express project"});
});

app.post('/users', function (req,res) {
   req.session.name = req.body.name;
   console.log(req.session.name);
   res.redirect('/');
});

app.get('/users/1', function(req,res) {
   console.log("The user id requested is:", req.params.id);
   res.send("You requested that user with id: " + req.params.id);
});

// app.get("/users", function (request, response){
//    var users_array = [
//       {name: "Michael", email: "michael@codingdojo.com"}, 
//       {name: "Jay", email: "jay@codingdojo.com"}, 
//       {name: "Brendan", email: "brendan@codingdojo.com"}, 
//       {name: "Andrew", email: "andrew@codingdojo.com"}
//    ];
//    response.render('users.ejs', {users: users_array});
// })



app.listen(8000, function() {
  console.log("listening on port 8000");
})
