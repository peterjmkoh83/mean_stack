import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  newAuthor: any;
  errorsObject: any;
  
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newAuthor = { name: "", age: ""}
    
  }

  createNewAuthor() {
    // console.log("Submitted");
    // console.log(this.newAuthor);
    let obs = this._httpService.createAuthor(this.newAuthor);
    obs.subscribe((data: any) => {
      if(data.errors) {
        this.errorsObject = data.errors
        console.log(this.errorsObject)
      }
      else {
        console.log(this.newAuthor);
        this._router.navigate(['/authors']);
      }
    })
    
  }
}
