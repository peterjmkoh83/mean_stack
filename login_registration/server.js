//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var flash = require("express-flash");
var validate = require("mongoose-validator")
var bcrypt = require("bcryptjs");
mongoose.Promise = global.Promise;

//Config
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.set('trust proxy', 1)

app.use(flash());
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
   secret: "secret",
   resave: "false",
   saveUninitialized: true,
   cookie: { maxAge: 60000 } 
}));

//Sockets

//Database
mongoose.connect("mongodb://localhost/login_registration", { useNewUrlParser: true });

var UserSchema = new mongoose.Schema({
   first_name: { 
      type: String, 
      required: [true, "Please enter your first name"], 
      validate: {
         validator: function(value) {
            return /^[A-z]+$/.test(value)
         },
         message: "Please enter a valid first name!"
      }
   },
   last_name: { 
      type: String, 
      required: [true, "Please enter your last name"],
      validate: {
         validator: function(value) {
            return /^[A-z]+$/.test(value)
         },
         message: "Please enter a valid last name!"
      }
   },
   email: { 
      type: String, 
      required: [true, "Please enter an email"], 
      validate: {
         validator: function(value){
            return /@/.test(value)
         },
         message: "Please enter a valid email address!"
      }
   },   
   password: { 
      type: String, 
      required: [true, "Please enter a password"],
      validate: {
			validator: function(value){
				return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,120}/.test(value);
			},
			message: "Password must contain at least 1 number, Uppercase Letter, and special character."
      } 
   },

   birthday: { 
      type: Date,
      required: [true, "Please enter your birthday"],
      validate: {
         validator: function(value){
            return value instanceof Date;
            },
            message: "Please enter a valid birthday!"
         } 
      }
   }, { timestamps: true });

   mongoose.model("User", UserSchema);
   var user = mongoose.model("User");

//Routes
app.get("/", function(req,res) {
   res.render("index")
});

app.post("/register", function(req,res) {
   console.log(req.body);
   user.create({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, birthday: req.body.birthday, password: req.body.password}, function(err){
      if(err) {
         console.log("Error in registration", err);
         for(var key in err.errors) {
            req.flash("regform", err.errors[key].message);
         }
         res.redirect("/");
      }
      else {
         console.log("No Error");
         res.redirect("/success");
      }
   }) 
})


app.post("/login", function(req,res) {
   console.log(req.body);
   user.find({}, function(err) {
      if(err) {
         console.log("Error in login", err);
         res.redirect("/");
      }
   })
   res.redirect("/success")
}) 

app.get("/success", function(req,res) {
   res.render("success")
})


//Port
app.listen(5000, function() {
   console.log("Listening to port: 5000");
});