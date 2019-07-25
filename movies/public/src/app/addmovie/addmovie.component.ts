import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  movies =[];
  newMovie = { title: "", name: "", star: "", comment: "", review: [] };

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.newMovie = { title: "", name: "", star: "", comment: "", review: [] };
    this.getAllMovies();
  }

  onSubmit() {
    console.log(this.newMovie);
    this._httpService.create(this.newMovie).subscribe(data => {
      if (data['movies']) {
        console.log(data)
        // if successful; after creating a new data, it will route to /pets
        this._router.navigate(['movies'])
      }
      // else {
      //   this.err = data['error']['errors'];
      //   console.log(data);
      // }
    })
  }

  getAllMovies() {
    this._httpService.getAll().subscribe(data => {
      this.movies = data['movies'];
      console.log("from movie", this.movies);
    });
  }
  


}
