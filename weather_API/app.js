const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3333;


//Config
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

//Database
require("./server/config/mongoose.js");

//Routes
// require("./server/config/routes.js")(app);

//Port
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})