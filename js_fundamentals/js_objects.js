// let students = [
//    {name: 'Remy', cohort: 'Jan'},
//    {name: 'Genevieve', cohort: 'March'},
//    {name: 'Chuck', cohort: 'Jan'},
//    {name: 'Osmund', cohort: 'June'},
//    {name: 'Nikki', cohort: 'June'},
//    {name: 'Boris', cohort: 'June'}
// ];

// function student(arr) {
   
//    for (var i = 0; i < arr.length; i++){
//       console.log(students[i]);
//    }
// }
// student(students);


let users = {
   employees: [
      {'first_name':  'Miguel', 'last_name' : 'Jones'},
      {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
      {'first_name' : 'Nora', 'last_name' : 'Lu'},
      {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
   ],
   managers: [
      {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
      {'first_name' : 'Gordon', 'last_name' : 'Poe'}
   ]
};

function em() {
   console.log("EMPLOYEES")
   for (var i = 0; i < users.employees.length; i++) {
      em = users.employees[i].first_name.length + users.employees[i].last_name.length;
      console.log(i+1 + " - " + users.employees[i].last_name + ", " + users.employees[i].first_name + " - " + em)
   }
   console.log("MANAGERS")
   for (var i = 0; i < users.managers.length; i++) {
      em = users.managers[i].first_name.length + users.managers[i].last_name.length;
      console.log(i+1 + " - " + users.managers[i].last_name + ", " + users.managers[i].first_name + " - " + em)
   }
}
em();
   
   
   