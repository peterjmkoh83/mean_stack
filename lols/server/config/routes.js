const lols = require("../controllers/lols");

module.exports = function(app) {
   app.get("/api/lols", lols.getAll);
   app.get("/api/lols/:id", lols.getOne);
   app.post("/api/lols/new", lols.create);
   app.put("/api/lols/edit/:id", lols.update);
   app.delete("/api/lols/:id", lols.delete);
}