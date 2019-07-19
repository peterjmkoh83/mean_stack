import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palm-spring',
  templateUrl: './palm-spring.component.html',
  styleUrls: ['./palm-spring.component.css']
})
export class PalmSpringComponent implements OnInit {
  weather_data: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.callWeather();
  }

  callWeather() {
    this._httpService.getPalmSpring().subscribe(data => {
      console.log(data);
      this.weather_data = data;
    })
  }

}
