const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

module.exports = {
   getAll: (req, res) => {
      Pet.find({}, (err, petsinDB) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err});
         }
         else {
            res.json({message: "Success", pets: petsinDB});
         }
      });
   },
   
   getOne: (req, res) => {
      Pet.findById({_id: req.params.id}, (err, petsinDB) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err });
         }
         else {
            res.json({message: "Success", pets: petsinDB});
         }
      });
   },

   create: (req, res) => {
      var new_pet = new Pet(req.body);
      new_pet.save((err, petsinDB) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err });
         }
         else {
            res.json({message: "Success", pets: petsinDB});
         }
      });
   },

   update: (req, res) => {
      console.log(req);
      Pet.findByIdAndUpdate({_id: req.params.id}, req.body, {runValidators: true, context: 'query'}, (err, petsinDB) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err});
         }
         else {
            res.json({message: "Success", pets: petsinDB});
         }
      });
   },

   delete: (req, res) => {
      Pet.findByIdAndDelete({_id: req.params.id}, (err) => {
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