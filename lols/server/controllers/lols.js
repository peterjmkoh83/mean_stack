const mongoose = require("mongoose");
const Lol = mongoose.model("Lol");

module.exports = {
   getAll: (req, res) => {
      Lol.find({}, (err, lolsinDB) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", lols: error});
         }
         else {
            res.json({message: "Success", lols: lolsinDB});
         }
      }).sort({type:1})
   },
   
   getOne: (req, res) => {
      Lol.findById({_id: req.params.id}, (err, lolsinDB) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err });
         }
         else {
            res.json({message: "Success", data: lolsinDB});
         }
      });
   },

   create: (req, res) => {
      var new_lol = new Lol(req.body);
      new_lol.save((err, lolsinDB) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err });
         }
         else {
            res.json({message: "Success", lols: lolsinDB});
         }
      });
   },

   update: (req, res) => {
      console.log(req);
      Lol.findByIdAndUpdate({_id: req.params.id}, req.body, {runValidators: true, context: 'query'}, (err, lolsinDB) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err});
         }
         else {
            res.json({message: "Success", lols: lolsinDB});
         }
      });
   },

   delete: (req, res) => {
      Lol.findByIdAndDelete({_id: req.params.id}, (err) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err});
         }
         else {
            res.json({message: "Success"});
         }
      });
   }



}