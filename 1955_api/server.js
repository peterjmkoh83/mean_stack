//imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//config
app.use(bodyParser.json());

//database
require("./server/config/mongoose.js");
mongoose.connect("mongodb://localhost:27017/1955_api", { useNewUrlParser: true })

//routes
require("./server/config/routes.js")(app);

//port
app.listen(3333, function() {
   console.log("Connected to 3333");
})