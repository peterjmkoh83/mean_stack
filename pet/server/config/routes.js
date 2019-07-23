const pets = require("../controllers/pets");

module.exports = function(app) {
   app.get("/api/pets", pets.getAll);
   app.get("/api/pets/:id", pets.getOne);
   app.post("/api/pets/new", pets.create);
   app.put("/api/pets/edit/:id", pets.update);
   app.delete("/api/pets/:id", pets.delete);
}