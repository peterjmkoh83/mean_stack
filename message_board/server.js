//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var flash = require("express-flash");
mongoose.Promise = global.Promise;

//Config
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(flash());
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session( {
   secret: "messages",
   resave: "false",
   saveUninitialized: true,
   cookie: { maxAge: 60000 } 
}));

//Sockets

//Database
mongoose.connect("mongodb://localhost/message_board", { useNewUrlParser: true });

var commentSchema = new mongoose.Schema({
   name: { type: String, required: [true, "Your name is required"], minlength: 2 },
   comment: { type: String, required: [true, "Your comment is required"], minlength: 2 },
   }, {timestamps: true})

var messageSchema = new mongoose.Schema({
   name: { type: String, required: [true, "Your name is required"], minlength: 2 },
   message: { type: String, required: [true, "Your message is required"], minlength: 2 },
   comments: [commentSchema]
   }, {timestamps: true })


var Comment = mongoose.model("Comment", commentSchema);
var Message = mongoose.model("Message", messageSchema);

//Routes
app.get("/", function(req, res) {
   console.log("ROOT");
   Message.find({}, function(err, messages) {
      if(err) {
         console.log("Error matching DB", err)
      }
      else {
         res.render("index", {messages:messages});
      }
   })
   
});

app.post("/message", function(req, res) {
   console.log("MESSAGE", req.body);
   var message = new Message({name: req.body.name, message: req.body.message});
   message.save(function(err) {
      if(err) {
         console.log("Something went wrong", err);
         for (var key in err.errors) {
            req.flash("postMsg", err.errors[key].message);
         }
         res.redirect("/");
      } else {
         console.log("Successfully added a message");
         res.redirect("/");
      }
   })
});

app.post("/comment/:id", function(req, res) {
   console.log("COMMENT", req.body);
   Comment.create(req.body, function(err, data) {
      if(err) {
         console.log("Something went wrong", err);
      } 
      else {
         console.log(data);
         Message.findOneAndUpdate({_id:req.params.id}, {$push: {comments:data}},function(err,data) {
            if(err) {
               console.log("Error from saving comment:", err);
            }   
            else {
               console.log(data),
               data.save()
            }
         })
      }
   })
   res.redirect("/");
})



app.listen(5000, function() {
   console.log("Lisening on port: 5000");
});