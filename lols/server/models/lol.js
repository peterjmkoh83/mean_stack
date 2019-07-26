const mongoose = require('mongoose');

const LolSchema = new mongoose.Schema({
   name: {
      type: String, 
      required: [true, "Name is required"], 
      minlength: [3, "Name must be at least 3 characters"]
   },
   type: {
      type: String, 
      required: [true, "Type is required"], 
      minlength: [3, "Type must be at least 3 characters"]
   },
   position: {
      type: String, 
      required: [true, "Description is required"], 
      minlength: [3, "Position must be at least 3 characters"]
   },
   skill: {
      type: String},
   
   },
   {timestamps: true});


mongoose.model('Lol', LolSchema);