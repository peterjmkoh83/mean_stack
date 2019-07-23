import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  pets: any;
  liked = false;

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
        this.pets = data['pets']
      }); 
    });
  }

  onDelete(id) {
    console.log("adopted");
    this._httpService.delete(id).subscribe(data => {
      console.log(data)   
      this._router.navigate(['pets'])
    });
  }

  onLikes(pets) {
    console.log("liked");
    pets.likes++;
    this.liked = true;
    console.log(pets)
    this._httpService.updateOne(pets).subscribe(data=> {
      console.log(data)
    });
  }



}


// likePet(pet){
//   pet.likes++;
//   this.liked = true;
//   this._httpService.updateOne(pet).subscribe(data=>{
//   });

// }