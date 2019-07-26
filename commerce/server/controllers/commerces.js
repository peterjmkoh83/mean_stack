const mongoose = require("mongoose");
const Commerce = mongoose.model("Commerce");

module.exports = {
   getAll: (req, res) => {
      Commerce.find({}, (err, commercesinDB) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err});
         }
         else {
            res.json({message: "Success", commerces: commercesinDB});
         }
      }).sort({type:1})
   },
   
   getOne: (req, res) => {
      Commerce.findById({_id: req.params.id}, (err, commercesinDB) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err });
         }
         else {
            res.json({message: "Success", commerces: commercesinDB});
         }
      });
   },

   create: (req, res) => {
      var new_commerce = new Commerce(req.body);
      new_commerce.save((err, commercesinDB) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err });
         }
         else {
            res.json({message: "Success", commerces: commercesinDB});
         }
      });
   },

   update: (req, res) => {
      console.log(req);
      Commerce.findByIdAndUpdate({_id: req.params.id}, req.body, {runValidators: true, context: 'query'}, (err, commercesinDB) => {
         if(err) {
            console.log(err);
            res.json({message: "Error", error: err});
         }
         else {
            res.json({message: "Success", commerces: commercesinDB});
         }
      });
   },

   delete: (req, res) => {
      Commerce.findByIdAndDelete({_id: req.params.id}, (err) => {
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