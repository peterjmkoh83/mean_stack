var tigger = { 
   character: "Tigger",
   greet: function() {
      console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
   } 
};

var pooh = { 
   character: "Winnie the Pooh", 
   greet: function() {
      console.log("Honey is wonderful things!");
   }
};

var piglet = { 
   character: "Piglet",
   greet: function() {
      console.log("Your favorite place");
   }
};

var bees = { 
   character: "Bees", 
   greet: function() {
      console.log("Welcome to Bees");
   }   
};

var owl = { 
   chracter: "Owl", 
   greet: function() {
      console.log("Welcome to Owl");
      }   
};

var robin = { 
   character: "Christopher Robin", 
   greet: function() {
      console.log("Welcome to robin");
   }   
};

var rabbit = { 
   character: "Rabbit", 
   greet: function() {
      console.log("Welcome to Rabbit");
   }   
};

var gopher = { 
   character: "Gopher", 
   greet: function() {
      console.log("Welcome to Gopher");
   }   
};
var kanga = { 
   character: "Kanga", 
   greet: function() {
      console.log("Welcome to Kanga");
   }   
};
var eeyore = { 
   character: "Eeyore", 
   greet: function() {
      console.log("Welcome to Eeyore");
   }   
};
var heffalumps = { 
   character: "Heffalumps",
   greet: function() {
      console.log("Welcome to Heffalumps");
   }   
};

tigger.north = pooh;
pooh.south = tigger;

pooh.south = tigger;
pooh.east = bees;
pooh.north = robin;
pooh.west = piglet;
piglet.east = pooh;
bees.west = pooh;

owl.wouth = piglet;
piglet.north = owl;
pooh.west = piglet;
tigger.north.west = piglet;

pooh.east = bees;
rabbit.south = bees;
tigger.north.east = bees;
bees.west = pooh;
bees.north = rabbit;
bees.west.west = piglet;

owl.south = piglet;
owl.east = robin;
owl.south.east.south = tigger;
owl.south.east.east = bees;

robin.south = pooh;
robin.west = owl;
robin.north = kanga;
robin.east = rabbit;
robin.south.south = tigger;
robin.south.west = piglet;
robin.south.east = bees;

rabbit.west = robin;
rabbit.south = bees;
rabbit.east = gopher;
rabbit.south.west.south = tigger;
rabbit.south.west.west = piglet;
rabbit.west.west = owl;
rabbit.west.south = pooh;

gopher.west = rabbit;
gopher.west.west.south.south = tigger;
gopher.west.west.west.south = piglet;
gopher.west.west.south = pooh;
gopher.west.south = bees;
gopher.west.west.west = owl;
gopher.west.west = robin;

kanga.south = robin;
kanga.north = eeyore;
kanga.south.south.south = tigger;
kanga.south.south.west = piglet;
kanga.south.south = pooh;
kanga.south.south.east = bees;
kanga.south.west = owl;

eeyore.south = kanga;
eeyore.east = heffalumps;

heffalumps.west = eeyore;


var player = {
   location: tigger,
   hasHoney: false,
};


function move(dir) { 
   if(player.location[dir] === undefined) {
      console.log("You may not go that way");
   }
   else {
      player.location = player.location[dir];
      console.log("You are now at " + player.location.character + "'s house");
      player.location.greet();
   }
}

function pickUp() {
   if (player.location === bees) {
      player.hasHoney = true;
      console.log("You've got honey!, Please deliver honey for me!");
   }
   else {
      player.hasHoney = false;
      console.log("There is no honey here!");
   }
} 

function mission() {
   characters = [tigger, piglet, pooh, owl, robin, rabbit, gopher, kanga, eeyore, heffalumps];
   var rand = Math.floor(Math.random()*Math.floor(characters.length));
   honeypost = characters[rand];
   honeypost.objective = true;
   console.log("Drop Off Honey at " + honeypost.character)
}


function drop() {
   if (player.location.objective === true) {
      
      if (player.hasHoney === false) {
         console.log("You don't have honey yet")
      }
      else {
         console.log("Contratulation, you have successfully delivered honey!")
         player.hasHoney = false;
      }
   }
   else {
      console.log("You can't drop honey here")
   }
}

console.log("Welcome to Hunred Acre Woods.")
console.log("Your mission is to pick up honey from Bees then carry it over to whom it needs it")
console.log("Enjoy!")
console.log("Winnie the poo is looking for honey! Can you find it?")
mission();


