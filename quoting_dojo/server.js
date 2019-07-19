var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quoting_dojo', { useNewUrlParser: true });
var UserSchema = new mongoose.Schema({
   name: { type: String, required: true, minlength: 2 },
   quote: { type: String, required: true, maxlength: 50 },
}, { timestamps: true });
mongoose.model('User', UserSchema);
var User = mongoose.model('User')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
   res.render("index")
})

app.post('/quotes', function(req,res) {
   console.log("POST DATA", req.body);
   var user = new User({name: req.body.name, quote: req.body.quote});
   user.save(function(err) {
      if(err) {
         console.log("Something went wrong");
      } else {
         console.log("successfully added a user and quote");
      }
      res.redirect('/quotes')
   })
})

app.get('/quotes', function(req,res) {
   User.find({}, function(err, users) {
      if(err) {
         console.log("There is a problem");
      } else {
         res.render("quotes", {users})
      }

   })
   
})

app.listen(8000, function() {
   console.log("Listening on port 8000");
})