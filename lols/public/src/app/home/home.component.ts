import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrayOFLegends: string;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
    ) { }

  ngOnInit() {
    this._httpService.getAll().subscribe(data => {
      // console.log(data);
      this.arrayOFLegends = data['lols'];
      console.log(this.arrayOFLegends);
    });
    
  }

  onDelete(oneLegendId) {
    console.log(oneLegendId)

    this._httpService.delete(oneLegendId).subscribe(data => {
      console.log(data)   
      this._router.navigate([''])
    });
    // this._route.params.subscribe((params: Params) => {
    //   console.log("The ID in the URL is:", params['id'])
      // this._httpService.getOne(params['id']).subscribe(data => {
      //   console.log(data);
      //   this.lols = data['lols']
      // }); 
    // });
  }



}
