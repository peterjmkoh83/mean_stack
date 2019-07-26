import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get(`/api/lols`);
  }

  create(newLegend) {
    console.log('data from http: ',newLegend)
    return this._http.post(`/api/lols/new`, newLegend)
  }

  delete(id) {
    return this._http.delete(`/api/lols/${id}`);
  }

  getOne(id) {
    return this._http.get(`/api/lols/${id}`);
  }
  
}
