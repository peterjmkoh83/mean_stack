const path = require("path");
const fs = require("fs");

// create a variable that points to the models folder
var modelsPath = path.join(__dirname, "./../models");
// read all of the files in the modelsPath and require (run) each of the javascript files
fs.readdirSync(modelsPath).forEach(function(file) {
   if (file.indexOf(".js") >= 0) {
      // require the file (this runs the model file which registers the schema)
      require(modelsPath + "/" + file);
   }
});