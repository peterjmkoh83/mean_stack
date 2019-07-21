import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  
  constructor(private _httpService: HttpService, private _route: Router) { }
  newProd = { title: "", price: Number, img: ""};
  err: any;
  
  ngOnInit() {
  }



  onSubmit() {
    this._httpService.create(this.newProd).subscribe(data => {
      if(data['products']){
        // if successful; after creating a new data, it will route to /products
        this._route.navigate(['/products'])
      }
      else {
        this.err = data['error']['errors'];
        console.log(data);
      }
    })
  }


}
