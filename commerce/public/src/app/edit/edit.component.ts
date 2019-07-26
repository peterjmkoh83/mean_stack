import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  prods: any;
  prods_id: any;
  err: any;

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.prods_id = params['id']
    });
    console.log("Product id from edit: ", this.prods_id)
    this.getOneProd()
  }
  
  getOneProd() {
    this._httpService.getOne(this.prods_id).subscribe(data => {
      this.prods = data['commerces'];
    })
  }
  
  onUpdate() {
    console.log("Updating product: ", this.prods);
    this._httpService.updateOne(this.prods).subscribe(data => {
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
