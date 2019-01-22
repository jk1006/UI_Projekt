import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../subject';
import { SubjectsComponent } from '../subjects/subjects.component';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  @Input() subject: Subject;

  constructor(private subjectsComponent: SubjectsComponent ) { }

  ngOnInit() {
  }
  deleteSubject(subject: Subject): void {
    this.subjectsComponent.deleteSubject(subject);
  }
}
