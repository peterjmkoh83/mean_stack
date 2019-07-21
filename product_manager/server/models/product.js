const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
   title: {type: String, require: [true, "Title must be provided."], minlength: [4, "Title must be at least 4 charaters long."]},
   price: {type: Number, required: [true, "Price must be provided."], minlength: [1, "Please provide price"]},
   img: {type: String, required: [true, "image URL must be provided."], minlength: [1, "Please provide image"]}
   },
   {timestamps: true});

mongoose.model('Product', ProductSchema);