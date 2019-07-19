//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var flash = require("express-flash");
mongoose.Promise = global.Promise; 

//Config
app.use(flash());
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
   secret: "ferrets",
   resave: false,
   saveUninitialized: true,
   cookie: { maxAge: 60000 }
}))

app.set("views", __dirname + "/views");
app.set("view engine", "ejs")

//Sockets

//Database
mongoose.connect("mongodb://localhost/ferret_dashboard",  { useNewUrlParser: true } );

var FerretSchema = new mongoose.Schema({
   name: {type: String, required: [true, "Ferret name required!"], minlength:3},
   age: {type: Number, required: [true, "Ferret age required!"], min: 1, max: 15},
   color: {type: String, required: [true, "Ferret color required!"], minlength: 3},
   }, {timestamps: true});
   mongoose.model("Ferret", FerretSchema);
   var Ferret = mongoose.model("Ferret");

//Routes
app.get("/", function(req,res) {
   console.log("~~~ROOT~~~")
   Ferret.find({}, function(err, ferrets){
      if(err){
         console.log("~~~Error matching DB request~~~", err);
      } else {
         res.render("index", {info: ferrets});
      }
   })
})

app.get("/ferrets/new",function(req,res){
   console.log("~~~New Form~~~");
   res.render("new");
})

app.post("/ferrets", function(req,res) {
   console.log("~~~Post~~~", req.body);
   var ferret = new Ferret({name: req.body.name, age: req.body.age, color: req.body.color});
   ferret.save(function(err) {
      if(err) {
         console.log("Something wrong adding a ferret", err);
         for(var key in err.errors) {
            req.flash("ferretform", err.errors[key].message);
         }
         res.redirect("/ferrets/new");
      } else {
         console.log("Successfully added a ferret");
         res.redirect("/");
      }
   })
})

app.get("/ferrets/:_id", function(req, res) {
   console.log("~~~show~~~")
   Ferret.findOne({_id:req.params._id}, function(err, ferret){
      if(err) {
         console.log("Error matching DB request", err);
      } else {
         res.render("details", {ferret: ferret});
      }
   })
})

app.get("/ferrets/edit/:_id", function(req,res) {
   console.log("~~~edit page~~~")
   Ferret.findOne({_id:req.params._id}, function(err, ferret) {
      if(err) {
         console.log("Error matching DB request", err);
      } else {
         res.render("edit", {ferret: ferret});
      }
   })
})

app.post("/ferrets/:_id", function(req,res) {
   console.log("~~~Edit~~~");
   Ferret.findOne({_id:req.params._id}, function(err, ferret) {
      if(err) {
         console.log("Error matching DB request", err);
      } else {
         Ferret.update({_id: ferret.id}, {$set: {name: req.body.name, age: req.body.age, color: req.body.color}}, function(err) {
            if(err) {
               console.log("Error updating", err);
            } else {
               res.redirect("/")
            }
         })
      }
   })
})

app.post("/ferrets/destroy/:_id", function(req, res) {
   console.log("~~~Destory~~~");
   Ferret.findOne({_id:req.params._id}, function(err, ferret) {
      if(err) {
         console.log("Error matching DB request", err);
      } else {
         Ferret.remove({_id: ferret.id}, function(err) {
            if(err) {
               console.log("Error on delete", err);
            } else {
               res.redirect("/");
            }
         }) 
      }
   })
})


app.listen(3333, function() {
   console.log("Listening on port: 3333");
})