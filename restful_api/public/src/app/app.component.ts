import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  main_title = 'Restful Tasks API';
  tasks: any;
  one_task: any;
  num: number;
  randNum: number;
  str: string;
  first_name: string;
  newTask: any;
  editTask: any;
  editTog: boolean = false;
  
  constructor(private _httpService: HttpService) {}

  ngOnInit(){
    // this.getTasksFromService();    
    this.newTask = { title: "", description: "" }
  }

  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("creating data", data)
      this.newTask = { title: "", description: "" }
      this.getTasksFromService();
    })
  }
  
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.tasks = data["task"];
    });
  }  

  getTaskFromService(id) {
    let observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      console.log("Got an Id!", data);
      this.one_task = data["task"];
    });
  }

  onDelete(id) {
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log("id", id)
      this.one_task = data["task"];
      this.getTasksFromService();  
    })
  }
  editForm(task){
    this.editTask = {_id: task._id, title: task.title, description: task.description}
    this.editTog = true;
  }
  
  onEdit() {
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => {
      // console.log("on edit!", data)
     
      // this.tasks = data["task"];
      this.getTasksFromService(); 
    })
  }
  

}
