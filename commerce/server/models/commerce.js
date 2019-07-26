const mongoose = require('mongoose');

const CommerceSchema = new mongoose.Schema({
   name: {
      type: String, 
      required: [true, "Name is required"], 
      minlength: [3, "Name must be at least 3 characters"]
   },
   qty: {
      type: Number, 
      required: [true, "Quantity is required"], 
      minlength: [0, "Quantity must be greater or equal to 0"]
   },
   price: {
      type: Number, 
      required: [true, "Price is required"],
      minlength: [0, "Price must be greater or equal to 0"]
   },
   },
   {timestamps: true});

mongoose.model('Commerce', CommerceSchema);