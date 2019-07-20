//Imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 7777;
const path = require('path');

//Config
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

// app.all("*", (req,res,next) => {
//    res.sendFile(path.resolve("./public/dist/public/index.html"))
// });

//Database
require('./server/config/mongoose.js');

//Routes
require('./server/config/routes.js')(app);

//Port
app.listen(PORT, function() {
   console.log(`listening to port: ${PORT}`)
});


