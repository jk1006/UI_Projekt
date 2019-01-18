import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects: Subject[];
  selectedSubject: Subject;
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubjects();
  }
  onSelect(subject: Subject): void{
    this.selectedSubject = subject;
  }
  getSubjects(): void {
   this.subjectService.getSubjects().subscribe( subjects => this.subjects = subjects );
  }

}
