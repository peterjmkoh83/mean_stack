import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
 
  constructor(
    private _http: HttpClient
  ) { }

  getAll() {
    return this._http.get(`/api/commerces`);
  }

  create(newProd: any) {
    return this._http.post(`/api/commerces/new`, newProd)
  }

  getOne(id: any) {
    return this._http.get(`/api/commerces/${id}`);
  }

  delete(id: any) {
    return this._http.delete(`/api/commerces/${id}`);
  }

  updateOne(prods: any) {
    return this._http.put(`/api/commerces/edit/${prods._id}`, prods);
  }

}
