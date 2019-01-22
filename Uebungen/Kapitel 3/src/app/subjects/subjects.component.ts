import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects: Subject[] = [];
  selectedSubject: Subject;
  constructor(private subjectService: SubjectService, private router: Router) { }

  ngOnInit() {
    this.getSubjects();
  }
  onSelect(subject: Subject): void {
    this.selectedSubject = subject;
  }
  getSubjects(): void {
   this.subjectService.getSubjects().subscribe( subjects => this.subjects = subjects );
   console.log(this.subjects.length);
  }
  deleteSubject(subject: Subject): void {
    this.subjects = this.subjects.filter(h => h !== subject);
    this.subjectService.deleteSubject(subject).subscribe();
    window.location.reload();
  }
  createSubject(): void {
    this.router.navigateByUrl('/create');
  }
  addSubject(subject): void {
    this.subjectService.createSubject(subject).subscribe( );
    window.location.reload();
  }


}
