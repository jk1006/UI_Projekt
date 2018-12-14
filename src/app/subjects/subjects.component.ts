import { Component, OnInit } from '@angular/core';
import { SUBJECTS } from '../subjects-mock';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects = SUBJECTS;
  constructor() { }

  ngOnInit() {
  }

}
