import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SUBJECTS } from '../subjects-mock';

@Component({
  selector: 'app-week-overview',
  templateUrl: './week-overview.component.html',
  styleUrls: ['./week-overview.component.css']
})
export class WeekOverviewComponent implements OnInit {
  subjects = SUBJECTS;
  constructor() { }

  ngOnInit() {
  }
  title = 'Mein Stundenplan';
}
