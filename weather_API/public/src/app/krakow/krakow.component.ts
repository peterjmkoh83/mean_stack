import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-krakow',
  templateUrl: './krakow.component.html',
  styleUrls: ['./krakow.component.css']
})
export class KrakowComponent implements OnInit {
  weather_data:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.callWeather()
  }

  callWeather() {
    this._httpService.getKrakow().subscribe(data => {
      console.log(data);
      this.weather_data = data;
    })
  }
}
