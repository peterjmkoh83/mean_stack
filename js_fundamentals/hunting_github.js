$(document).ready(function() {
   // var displayName;
   $.get("https://api.github.com/users/peterjmkoh83", function(data){
      // displayName = data.login;
      // console.log(displayName);
      $('#name').click(function() {
         $('#name').html("<h1>" + data.login + "</h1>")
      });
   });
});


$(document).ready(function() {
   $.get("https://api.github.com/users/peterjmkoh83", displayName)
  
   function displayName(data) {
      console.log(data);
      $('#name').click(function() {
         $('#name').html("<h1>" + data.login + "</h1>")
      });
   }
});

displayName()