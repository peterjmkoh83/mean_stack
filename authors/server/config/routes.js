const authors = require('../controllers/authors.js');
const path = require('path');

module.exports = function(app) {
   
   app.get("/authors", authors.index);
   app.post("/authors/new", authors.new);
   app.put("/authors/edit/:id", authors.edit);
   app.delete("/authors/delete/:id", authors.delete);
   app.get("/authors/:id", authors.details);
   app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
