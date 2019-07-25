import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  movies: any;
  newReview: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
    ) { }


  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("The ID in the URL is:", params['id'])
      this._httpService.getOne(params['id']).subscribe(data => {
        console.log(data);
        this.movies = data['movies']
      }); 
    });
    
  }

  onDelete(id) {
    console.log("deleting");
    this._httpService.delete(id).subscribe(data => {
      console.log(data)   
      this._router.navigate(['movies'])
    });
  }


}
