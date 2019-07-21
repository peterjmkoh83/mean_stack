import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  getAll() {
    return this._http.get(`/products`);
  }
  getOne(id) {
    return this._http.get(`/products/${id}`);
  }
  create(prod) {
    return this._http.post(`/products`, prod);
  }
  update(id, prod) {
    return this._http.put(`/products/${id}`, prod);
  }
  delete(id) {
    return this._http.delete(`/products/${id}`);
  }

}
