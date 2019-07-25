import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getAll().subscribe(data => {
      console.log(data);
      this.movies = data['movies'];
    })

  }


}
