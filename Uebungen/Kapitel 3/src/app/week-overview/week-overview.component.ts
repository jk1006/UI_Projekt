import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';


@Component({
  selector: 'app-week-overview',
  templateUrl: './week-overview.component.html',
  styleUrls: ['./week-overview.component.css']
})
export class WeekOverviewComponent implements OnInit {

  public sub = "test";
  constructor() { 

   }

  ngOnInit() {
    
  }
  title = 'Mein Stundenplan';
}
