var mongoose = require("mongoose");

var RatingSchema = new mongoose.Schema({
   rating: {type: Number, required: [true, "Enter a rating between 1 and 5"]},
   comment: {type: String, required: [true, "Enter a comment"]},
   }, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

var CakeSchema = new mongoose.Schema({
   baker: {type: String, required: [true, "Enter a name"]},
   image: {type: String, required: [true, "Please provide an url"]},
   rating: [RatingSchema]
   }, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

mongoose.model("Rating", RatingSchema);
mongoose.model("Cake", CakeSchema);