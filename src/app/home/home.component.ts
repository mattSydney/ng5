import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  goalText: string = "My goal";
  goals = [];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.itemCount = this.goals.length;
    this.data.goal.subscribe(res => this.goals = res);
    this.data.changeGoal(this.goals);
  }

  onClick(){
    //alert(this.goalText)
    this.goals.push(this.goalText);
    this.itemCount = this.goals.length;
    this.data.changeGoal(this.goals);
  }

}
