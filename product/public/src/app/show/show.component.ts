import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  product: any;


  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("The ID in the URL is:", params['id'])
      this._httpService.getOne(params['id']).subscribe(data => {
        console.log(data);
        this.product = data['product']
      }); 
    });
  }

}
