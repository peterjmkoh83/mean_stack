const products = require("../controllers/products");

module.exports = function(app) {
   app.get("/api/products", products.getAll);
   app.get("/api/products/:id", products.getOne);
   app.post("/api/products/new", products.create);
   app.put("/api/products/edit/:id", products.update);
   app.delete("/api/products/:id", products.delete);
}