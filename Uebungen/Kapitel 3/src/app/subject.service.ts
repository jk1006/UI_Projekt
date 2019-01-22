import { Injectable } from '@angular/core';
import { Subject } from './subject';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  jsonResponse: string;
  private subjectGetURL = 'http://localhost:3000/api/event/';
  private subjectDeleteURL = 'http://localhost:3000/api/event/';
  private subjectCreateURL = 'http://localhost:3000/api/event/create';
  constructor( private http: HttpClient ) {
  }
  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectGetURL);
  }
  deleteSubject(subject: Subject) {
      return this.http.delete<Subject>(this.subjectDeleteURL + subject.id);
  }
  createSubject(subject: Subject): Observable<Subject> {
     return this.http.post<Subject>(this.subjectCreateURL, JSON.stringify(subject), httpOptions);
  }
}
