const commerces = require("../controllers/commerces");

module.exports = function(app) {
   app.get("/api/commerces", commerces.getAll);
   app.get("/api/commerces/:id", commerces.getOne);
   app.post("/api/commerces/new", commerces.create);
   app.put("/api/commerces/edit/:id", commerces.update);
   app.delete("/api/commerces/:id", commerces.delete);
}