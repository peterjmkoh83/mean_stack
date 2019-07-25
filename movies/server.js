//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = 8000;


//Config
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

//Database
// mongoose.connect("mongodb://localhost/rate_my_cakes");
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(PORT, () => {
   console.log(`Listening on port: ${PORT}`);
})