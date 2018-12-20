import { Component, OnInit } from '@angular/core';
import { SUBJECTS } from '../subjects-mock';
import { Subject } from '../subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects = SUBJECTS;
  selectedSubject: Subject;
  constructor() { }

  ngOnInit() {
  }
  onSelect(subject: Subject): void{
    this.selectedSubject = subject;
  }

}
