import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getKrakow() {
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q=krakow,us&appid=dcf8a15aea99b39c45e69c96b80fea12")
  }

  getLosAngeles() {
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q=los%20angeles,us&appid=dcf8a15aea99b39c45e69c96b80fea12")
  }
  
  getPalmSpring() {
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q=las%20vegas,us&appid=dcf8a15aea99b39c45e69c96b80fea12")
  }

  getSeattle() {
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q=seattle,us&appid=dcf8a15aea99b39c45e69c96b80fea12")
  }

}
