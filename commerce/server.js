// import
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8000;

// config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join( __dirname + '/public/dist/public')));


// database
require("./server/config/mongoose");

// routes
require("./server/config/routes")(app);

// port
app.listen(PORT, ()=> {
   console.log(`Listening to port: ${PORT}`);
});