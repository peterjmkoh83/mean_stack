import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get("/authors");
  }

  addAuthor(newAuthor) {
    return this._http.post("/authors/new", newAuthor);
  }
  
  getOneAuthor(author){
    return this._http.get(`/authors/${author._id}`);
  }

  editAuthor(author) {
    return this._http.put(`/authors/edit/${author._id}`, author);
  }

  deleteAuthor(id) {
    return this._http.delete(`/authors/delete/${id}`)
  }
}
