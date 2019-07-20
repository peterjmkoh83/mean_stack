import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Favorite authors';
  author = '';
  authors = [];

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    
  }

 

}
