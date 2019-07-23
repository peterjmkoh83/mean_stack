import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) { }
  newPet = { name: "", type: "", desc: "", skill: ""};
  err: any;

  ngOnInit() {
  }

  onSubmit() {
    console.log("submitted")
    this._httpService.create(this.newPet).subscribe(data => {
      if (data['pets']) {
        console.log(data)
        // if successful; after creating a new data, it will route to /pets
        this._router.navigate(['pets'])
      }
      else {
        this.err = data['error']['errors'];
        console.log(data);
      }
    })
  }



}
