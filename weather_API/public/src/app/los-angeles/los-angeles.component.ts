import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-los-angeles',
  templateUrl: './los-angeles.component.html',
  styleUrls: ['./los-angeles.component.css']
})
export class LosAngelesComponent implements OnInit {
  weather_data:any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.callWeather()
  }

  callWeather() {
    this._httpService.getLosAngeles().subscribe(data => {
      console.log(data);
      this.weather_data = data;
    })
  }


}
