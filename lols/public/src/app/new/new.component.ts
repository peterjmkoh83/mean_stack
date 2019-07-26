import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newLol = { name: "", type: "", position: "", skill: ""};
  err: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
    ) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log("submitted.......!!!!", this.newLol);
    this._httpService.create(this.newLol).subscribe(data => {
      console.log('the data returned after creation: ',data);
    //   if (data['lols']) {
    //     console.log('returned data: ',data)
    //     // if successful; after creating a new data, it will route to /pets
    //     this._router.navigate([''])
    //   }
    //   else {
    //     this.err = data['error']['errors'];
    //     console.log('data err: ',data);
    //   }
    })
  }



}
