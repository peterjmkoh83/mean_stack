import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author: object;
  editName: any;
  error: any;
  author_id:any;
  constructor(private _httpService: HttpService,  private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.findAuthor();
    this.editName = {name: ""};
    this.author = {author: {name: ""}};
   
  }

  findAuthor(){
    this._route.params.subscribe((params)=>{
      console.log("The ID in the URL is:", params["author._id"])
      let observable = this._httpService.getOneAuthor(params["id"]);
      observable.subscribe((data:any)=>{
        this.author_id = data;
        console.log("moo", this.author_id);
      })
    })
  }
  
  editSubmit(){
    this._route.params.subscribe((params)=>{
      let observable = this._httpService.editAuthor(params['id']);
      observable.subscribe((data:any) => {
        if(data.error){
          this.error = data.error.errors.name.message
        }
        else{
          console.log("Edit");
          this._router.navigate(['']);
        }
      })
    })
  }

}
