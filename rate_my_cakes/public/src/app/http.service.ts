import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes(){
    return this._http.get("/cakes");
  }

  getCake(id){
    return this._http.get(`/cakes/${id}`)
  }


  addCake(newCake){
    return this._http.post("/cakes", newCake);
  }

  addRating(cakeId, newRating) {
    return this._http.post(`/cakes/rating/${cakeId}`, newRating);
  }

}
