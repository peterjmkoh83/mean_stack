import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProd = { name: "", qty: Number, price: Number };
  err: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
  
  }

  onSubmit() {
    console.log("submitted")
    this._httpService.create(this.newProd).subscribe(data => {
      if (data['commerces']) {
        console.log(data)
        // if successful; after creating a new data, it will route to commerces
        this._router.navigate([''])
      }
      else {
        this.err = data['error']['errors'];
        console.log(data);
      }
    })
  }




}
