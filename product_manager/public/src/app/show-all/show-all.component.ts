import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  products: any;
  constructor(private _httpService: HttpService) { }


  ngOnInit() {
    this._httpService.getAll().subscribe(data => {
      this.products = data['products'];
    });
  }

  onDelete(id) {
    this._httpService.delete(id).subscribe(data => {
      this.ngOnInit();
    });
  }






}
