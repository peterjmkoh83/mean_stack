const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
   first_name : {
      type: String,
      required: [true, "please enter Author's first name"], 
      minlength: 3,
   },
   last_name : {
      type: String,
      required:  [true, "please enter Author's last name"],
      minlength: 3,
   }
   }, { timestamps: true });

mongoose.model("Author", AuthorSchema);