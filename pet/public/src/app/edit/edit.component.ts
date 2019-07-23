import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pets: any;
  pets_id: any;
  

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.pets_id = params['id']
    });
    console.log("pet id from edit: ", this.pets_id)
    this.getOnePet()
  }
  getOnePet() {
    this._httpService.getOne(this.pets_id).subscribe(data => {
      this.pets = data['pets'];
    })
  }
  
  onSubmit() {
    console.log("Edit pet: ", this.pets);
    this._httpService.updateOne(this.pets).subscribe(data => {
      console.log(data);
      this._router.navigate(['pets'])
    })
  }


}
