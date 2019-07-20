import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors = [];
  author = '';
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService() 
  }

  getAuthorsFromService() {
    this._httpService.getAuthors().subscribe(data => {
      console.log("show all authors", data)
      this.authors = data["author"]
    });
  }

  deleteAuthor(id) {
    this._httpService.deleteAuthor(id).subscribe(data => {
      console.log("deleted author", data)
      this.getAuthorsFromService();
    })
  }

  

}
