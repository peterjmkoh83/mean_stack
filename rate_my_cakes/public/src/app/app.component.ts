import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Rate my cakes';
  cake = "";
  cakes = [];
  newCake: any;
  newRating = { rating: "", comment: ""};
  selectedCake;
  // avg;

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {
    this.getCakesFromService();
    this.newCake = { baker: "", image: '' }
    
  }

  getCakesFromService() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("showing all cakes", data)
      this.cakes = data["cake"]
    });
  }
  
  cakeSubmit() {
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("creating a cake", data)
    });
    this.newCake = { baker: "", image: '' }
    this.getCakesFromService();
  }
  
  ratingSubmit(cakeId) {
    console.log(cakeId);
    console.log(this.newRating);
    let observable = this._httpService.addRating(cakeId, this.newRating);
    observable.subscribe(data => {
      console.log("creating a rate of cake", data)
    })
    this.newRating = { rating: "", comment: "" }
    this.getCakesFromService();
  }
  
  // cakeInfo() {
  //   this.selectedCake = 
  // }
}


