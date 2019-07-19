//Validations
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
   first_name: { type: String, required: true, minlength: 6 },
   last_name: { type: String, required: true, maxlength: 20 },
   age: { type: Number, min:1, max: 150 },
   email: { type: String, required: true },
}, { timestamps: true });

//Displaying validation errors: (server.js)

const flash = require('express-flash');

app.use(flash());
app.post('/users', function (req,res) {
   var user = new User(req.body);
   user.save(function(err) {
      if(err) {
         console.log("We have an error", err);
         for(var key in err.errors) {
            req.flash('registration', err.errors[key].message);
         }
         res.redirect('/');
      } 
      else {
         res.redirect('/users');
      }
   });
});

//index.ejs side:

<%- JSON.stringify(messages) %>

<% if (messages.registration) { %>
   <% for (var x of messages.registration) { %>
      <h3><%= x %></h3>
   <% } %>
<% } %>