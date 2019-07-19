class Bike {
   price: number;
   max_speed: string;
   miles: number;
   constructor (price: number, max_speed: string) {
      this.price = price;
      this.max_speed = max_speed;
      this.miles = 0;       
   }
   displayInfo() {
      console.log(`Price: ${this.price}, Max Spped: ${this.max_speed}, miles: ${this.miles}`)
   }

   ride() {
      console.log("Riding");
      this.miles += 10;
      return this;
   }
   reverse() {
      console.log("Reversing");
      if (this.miles <=5) {
         this.miles =0;
         return this;
      }
      else {
         this.miles -= 5;
         return this;
      }
       
   }
}

let bike1 = new Bike(200, "20mph");
let bike2 = new Bike(300, "30mph");
let bike3 = new Bike(500, "50mph");

bike1.ride().ride().ride().reverse();
bike1.displayInfo();

bike2.ride().ride().reverse().reverse();
bike2.displayInfo();

bike3.reverse().reverse().reverse();
bike3.displayInfo();
