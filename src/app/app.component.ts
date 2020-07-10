import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pagination';

  data : Array<any> = [
    [
      {
        name : 'HTML',
        des : 'Basic HTML Training'
      },
      {
        name : 'CSS',
        des : 'Basic CSS Training'  
      }
    ],
    [
      {
        name : 'Java',
        des : 'Basic Java Training'  
      },
      {
        name : 'Spring-Boot',
        des : 'Basic Spring-Boot Training'  
      }
    ]
  ];

  desc : string;
  dayIdx : number;
  topicIdx : number;
  currentDay : Array<any>;

  AppComponnet(){

  }

  addDay(){
    this.data.push([]);
  }

  addTopic(){
    let n = prompt("Please enter topic name:", "Topic here");
    let d = prompt("Please enter topic decription:", "Descripthion here");
    this.data[this.dayIdx].push({name : n,des : d});
  }

  selectTopic(idx : number){
    this.topicIdx = idx;
    this.desc = this.currentDay[this.topicIdx].des;
  }


  selectDay(idx : number){
      this.dayIdx = idx;
      this.topicIdx = 0;
      this.currentDay = this.data[idx];
      this.desc = this.data[this.dayIdx][this.topicIdx].des;
  }

  editDesc(){
    let d = prompt("Please edit topic decription:", "Edit Descripthion here");
    this.desc = d;
    this.data[this.dayIdx][this.topicIdx].des = d;
  }

  openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
}
