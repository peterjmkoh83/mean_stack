const movies = require('../controllers/movies.js');

module.exports = function(app) {
   app.get("/api/movies", movies.index)
   app.get("/api/movies/:id", movies.details)
   app.post("/api/movies/new", movies.addMovie)
   app.delete("/api/movies/:id", movies.delete)
   app.put("/api/movies/review/:id", movies.add)
}