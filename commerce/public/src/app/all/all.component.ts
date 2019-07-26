import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  prods: any;

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._httpService.getAll().subscribe(data => {
      console.log(data);
      this.prods = data['commerces'];
    })
  }
  
  
  







}
