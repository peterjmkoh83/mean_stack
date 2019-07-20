import { HttpService } from './../http.service';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-new-authors',
  templateUrl: './new-authors.component.html',
  styleUrls: ['./new-authors.component.css']
})
export class NewAuthorsComponent implements OnInit {
  newAuthor = {};


  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  authorSubmit() {
    this._httpService.addAuthor(this.newAuthor).subscribe(data => {
      console.log("added an author", data)
      
    })
  }


}
