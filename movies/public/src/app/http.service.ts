import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get(`/api/movies`)
  }

  create(newMovie: any) {
    return this._http.post(`/api/movies/new`, newMovie);
  }

  // addReview(moviesId, newReview) {
  //   return this._http.post(`/api/movies/review/${moviesId}`, newReview );
  // }

  addReview(id,newReview) {
    console.log(newReview)
    return this._http.put(`/api/movies/review/${id}`, newReview );
  }
  
  // addReview(id: String, newReview: any) {
  //   return this._http.put(`/api/movies/review/${id}`, newReview );
  // }

  getOne(id) {
    return this._http.get(`/api/movies/${id}`);
  }
  
  delete(id) {
    return this._http.delete(`/api/movies/${id}`);
  }

  


}
