const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
   secret: 'keyboard cat',
   resave: false,
   saveUninitialized: true,
   cookie: { maxAge: 60000 }
}))

app.post('/sessions', (req, res) => {
   console.log(" req.body: ", req.body);
   User.findOne({email:req.body.email, password: req.body.password}, (err, user) => {
      if (err) {
         // Code...
      }
      else {
         // Code...
            req.session.user_id = user._id;
            req.session.email = user.email;
      }
   })
})

npm install bcrypt

// Hashing
bcrypt.hash('password_from_form', 10)
.then(hashed_password => {

})
.catch(error => {

});

// Validation

bcrypt.compare('password_from_form', 'stored_hashed_password')
.then(result => {
	 
})
.catch(error => {
	 
})
