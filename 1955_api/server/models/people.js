const mongoose = require("mongoose");

var PeopleSchema = new mongoose.Schema({
   name: {type: String, required: true, minlength: 2 }
   }, { timestamps: true });

   mongoose.model("People", PeopleSchema);