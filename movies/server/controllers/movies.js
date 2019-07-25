var mongoose = require("mongoose");
var Movie = mongoose.model("Movie");
var Review = mongoose.model("Review");

module.exports = {

   index: function(req, res){
      Movie.find({}, function(err, movies){
         if(err){
            res.json({ message: "Error!", error: err });
         }
         else{
            res.json({ message: "Success!", movies: movies });
         }
      })
   },

   details: function(req, res){
      Movie.findById({ _id: req.params.id }, function(err, movies){
         if(err){
            res.json({ message: "Error!", error: err });
         }
         else{
            res.json({ message: "Success!", movies: movies });
         }
      })
   },

   addMovie: function(req, res){
      Movie.create({ title: req.body.title }, function(err, movies){
         if(err){
            res.json({ message: "Error!", error: err });
         }
         else{
            res.json({ message: "Success!", movies : movies });
         }
      })
   },

   delete: (req, res) => {
      Movie.findByIdAndDelete({_id: req.params.id}, (err) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err});
         }
         else {
            res.json({message: "Success"});
         }
      });
   },

   add: function(req, res) {
      console.log(req.body)
      var movie_id = req.params.id;
      Review.create({name: req.body.name, star: req.body.star, comment: req.body.comment}, function(err, newReview){
         console.log(req.body)
         if(err){
            res.json({message: "Error!", error: err});
         }
         else{
            console.log("I'm in insert into movie now")
            console.log(movie_id);
            Movie.findByIdAndUpdate({_id: movie_id}, {$push: {review: newReview}}, function(err, movies){
               
               if(err){
                  res.json({message: "Error!", error: err});
               }
               else{
                  res.json({message: "Success!", movies: movies });
               }
            })
         }
      })
   }
}