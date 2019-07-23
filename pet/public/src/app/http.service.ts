import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get(`/api/pets`);
  }
  create(pets) {
    return this._http.post(`/api/pets/new`, pets);
  }

  getOne(id) {
    return this._http.get(`/api/pets/${id}`);
  }
  
  delete(id) {
    return this._http.delete(`/api/pets/${id}`);
  }

  updateOne(pets) {
    return this._http.put(`/api/pets/edit/${pets._id}`, pets);
  }


}
