var UserSchema = new mongoose.Schema({ name: {type: String}, age: {type: Number}}, {timestamps: true})

mongoose.model('User', UserSchema);

var User = mongoose.model('User');

//Finding all users
User.find({}, function(err, users){})

//Finding all users based on a requirement
User.find({name: 'Jessica'}, function(err, users){})

//Finding one user
User.findOne({}, function(err, users) {})

//Creating a sample user
var userInstance = new User()
userInstance.name = 'Andriana'
userInstance.age = 29
userInstance.save(function(err){})

//Delete all users
User.remove({}, function(err){})

//Delete one user
User.remove({_id: 'insert record unique id here'}, function(err){})

//Update any records
User.update({name:'Andriana'}, {$push: {pets: {name: 'skippy', type: 'cactus'}}}, function(err){})

//Another way of updating a record
User.findOne({name: 'Andriana'}, function(err, user) {
   user.name = 'Andri';
   user.pets.push({name: 'skippy', type: 'cactus'});
   user.save(function(err) {
   })
})
