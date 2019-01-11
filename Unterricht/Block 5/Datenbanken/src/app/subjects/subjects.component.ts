import { Component } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  subjects = [];
  id: number = 1;
  constructor(private subjectService: SubjectService) { }

  search(): void {
    this.subjectService.getSubjects().subscribe(subjects => this.subjects = subjects);
  }

  delete(subject: Subject): void {
    this.subjects = this.subjects.filter(h => h !== subject);
    this.subjectService.deleteHero(subject).subscribe();
  }
}
