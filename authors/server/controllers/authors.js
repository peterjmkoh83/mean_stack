const mongoose = require('mongoose');
const Author = mongoose.model("Author");

module.exports = {
   index: function(req, res) {
      Author.find({}, function(err, author) {
         if(err){
            res.json({ message: "Error", error : err });
         } else {
            res.json({ message: "Success", author: author });
         }
      });
   },

   details: function(req, res){
      let id = req.params.id;
      Author.findOne({_id: id},function(err, author){
          if(err){
              res.json({message: "Error!", error: err});
          }
          else{
              res.json({message: "Success!", author: author});
          }
      })
  },
   
   new: function(req, res) {
      Author.create({ first_name: req.body.first_name, last_name: req.body.last_name }, function (err, author) {
         if(err) {
            res.json({ message: "Error", error: err });
         } else {
            res.json({ message: "Success", author: author });
         }
      });
   },

   edit: function(req, res) {
      Author.findByIdAndUpdate({_id: req.params.id}, {$set: {first_name: req.body.first_name, last_name:req.body.last_name }}, (err, author) => {
         if(err) {
            res.json({ message: "Error", error: err });
         } else {
            res.json({ message: "Success", author: author })
         }
      })
   },

   delete: function(req, res) {
      Author.findByIdAndRemove({_id: req.params.id}, (err,author)=> {
         if(err) {
            res.json({ message: "Error", error: err });
         } else {
            res.json({ message: "Success", author: author})
         }
      })
   }
}