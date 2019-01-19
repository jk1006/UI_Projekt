import { Injectable } from '@angular/core';
import { Subject } from './subject';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  jsonResponse: string;
  private subjectGetURL = 'http://localhost:3000/api/event/';
  private subjectDeleteURL = 'http://localhost:3000/api/event/';
  constructor( private http: HttpClient ) {
  }
  getSubjects(): Observable<Subject[]> {
   return this.http.get<Subject[]>(this.subjectGetURL);
  }
  deleteSubject(subject: Subject) {
      return this.http.delete<Subject>(this.subjectDeleteURL += subject.id);
  }
}
