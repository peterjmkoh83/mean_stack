import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {
  errors: any;
  newReview = { name:"", star: "", comment: "" };
  
  movie_id: String;
  movie: any;


  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.newReview = { name:"", star: "", comment: "" };
    this._route.params.subscribe((params: Params) => {
      this.movie_id = params['id'];
    });
    // this.getOneMovie();
  }

  // getOneMovie() {
  //   this._httpService.getOne(this.movie_id).subscribe(data => {
  //     this.movie = data['movies'];
  //     console.log("from write reviews: ", this.movie)
  //   })
  // }
  
  
 
  
  postReview() {
    console.log('id review: ', this.movie_id);
    console.log(this.newReview)
    this._httpService.addReview(this.movie_id,this.newReview).subscribe(data => {
      console.log('data from review: ', data);
      if(data['message'] == 'error') {
        this.errors = data['error']['errors'];
      }
      else {
        console.log(data["message"])
        this._router.navigate(['']);
      }
    });
  }
  
  
  // submitReview(moviesId) {
  //   console.log(moviesId)
  //   console.log(this.newReview)
  //   this._httpService.addingReview(moviesId, this.newReview).subscribe(data => {
  //     console.log("creating a review of movie", data);
  //   })
  //   this.newReview = { name:"", star: Number, comment: "" }
  //   this._router.navigate(['movies'])
  // }

  
}
