import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  prods: any;
  err: any;
  
  // qty: any;
  
  constructor(
    private _httpService: HttpService, 
    private _router: Router, 
    private _route: ActivatedRoute
  ) { }

  // ngOnInit() {
  //   this._route.params.subscribe((params: Params) => {
  //     console.log("The ID in the URL is:", params['id'])
  //     this._httpService.getOne(params['id']).subscribe(data => {
  //       console.log(data);
  //       this.prods = data['commerces']
  //     }); 
  //   });
  // }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("The ID in the URL is:", params['id'])
      this._httpService.getOne(params['id']).subscribe(data => {
        console.log(data);
        this.prods = data['commerces']
        
      }); 
    });
  }

  onDelete(id, prods) {
    console.log("Sending to server: ", id, this.prods.qty);
    if (this.prods.qty == 0) {
      this._httpService.delete(id).subscribe(data => {
      console.log(data)   
      this._router.navigate([''])
      });
    }
    else {
      this.prods.qty--
      console.log(this.prods)
    }
  }
  
  // onDelete(id) {
  //   console.log("Sending to server: ", id);
  //   this._httpService.delete(id).subscribe(data => {
  //     console.log(data)   
  //     this._router.navigate([''])
  //   });
  // }



}
