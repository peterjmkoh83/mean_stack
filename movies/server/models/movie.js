var mongoose = require("mongoose");

var ReviewSchema = new mongoose.Schema({
   name: {
      type: String, 
      require: [true, "Please enter your name"], minlength: [3, "Your name needs to be at least 3 characters"]},
   star: {
      type: String, 
      required: [true, "Please provide stars between 1 and 5"], 
      minlength: 1, 
      maxlength: 5},
   comment: {
      type: String, 
      required: [true, "Enter a comment"], minlength: [3, "Your comment needs to be at least 3 characters"]},
      }, 
   {
      timestamps: true
   });

var MovieSchema = new mongoose.Schema({
   title: {
      type: String, 
      required: [true, "Please provide movie title"], minlength: [3, "Title must be at least 3 characters"]},
   review: [ReviewSchema]
      }, 
   {
      timestamps: true
   });

mongoose.model("Review", ReviewSchema);
mongoose.model("Movie", MovieSchema);