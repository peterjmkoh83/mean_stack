// import
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const PORT = 8000;

// config
app.use(bodyParser. json());
app.use(express.static(__dirname + "/public/dist/public/"));

mongoose.connect("mongodb://localhost/authors-db", { useNewUrlParser: true });

// database
require("./server/config/mongoose.js");

// routes
require("./server/config/routes.js")(app);

app.all("*", (req, res, next) => {
   res.sendFile(path.resolve("./public/dist/public/index.html"));
});

// port
app.listen(PORT, () => {
   console.log(`Listening to ${PORT}`)
})