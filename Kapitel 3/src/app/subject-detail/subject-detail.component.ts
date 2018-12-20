import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../subject';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  @Input() subject: Subject;

  constructor() { }

  ngOnInit() {
  }

}
