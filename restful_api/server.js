// dependencies
const express = require("express");
const path = require("path");
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');


//config
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static( __dirname + '/public/dist/public'));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//database
require("./server/config/mongoose");

//routes
require("./server/config/routes.js")(app);

//port
app.listen(3000, ()=>{
    console.log(`Listening on PORT: 3000!`);
});