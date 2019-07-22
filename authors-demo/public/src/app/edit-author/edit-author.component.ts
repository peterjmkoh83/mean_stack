import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  author: any;

  constructor(private _httpService: HttpService, private _router : Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getAuthor(params['id'])
      console.log(params['id'])
    })
  }


  getAuthor(id) {
    let obs = this._httpService.getAuthor(id);
    obs.subscribe(data => {
      console.log(data);
      this.author = data;
    })
  }
}
