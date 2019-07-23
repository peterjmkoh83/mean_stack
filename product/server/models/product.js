const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
   name: {type: String, required: [true, "Please provide name"]},
   desc: {type: String, required: [true, "Please provide description"]},
   price: {type: Number, required: [true, "Please provide price"]}
   },
   {timestamps: true});

mongoose.model('Product', ProductSchema);