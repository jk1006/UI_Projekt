import { Injectable } from '@angular/core';
import { Subject } from './subject';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  jsonResponse: string;
  private subjectURL = 'http://localhost:3000/api/event/';
  constructor( private http: HttpClient ) {
  }
  getSubjects(): Observable<Subject[]> {
   return this.http.get<Subject[]>(this.subjectURL);
  }
}
