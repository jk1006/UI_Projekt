import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';
import { SubjectsComponent } from '../subjects/subjects.component';

@Component({
  selector: 'app-subject-creation',
  templateUrl: './subject-creation.component.html',
  styleUrls: ['./subject-creation.component.css']
})
export class SubjectCreationComponent implements OnInit {

  days = ['Montag', 'Dienstag',
            'Mittwoch', 'Donnerstag', 'Freitag'];
  subject = new Subject();
  constructor(private router: Router, private subjectsComponent: SubjectsComponent) { }

  ngOnInit() {
  }
  createSubject(): void {
    this.subjectsComponent.addSubject(this.subject);
    this.router.navigateByUrl('');
  }

}
