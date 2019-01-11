import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Subject } from './subject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private url = "http://localhost:3000/api/event/";  // URL to web api

  constructor(private http: HttpClient) {
  }


  /** GET Subjects from the server */
  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.url)
      .pipe(
        catchError(this.handleError('getSubjects', []))
      );
  }

   /** GET Subjects by id. Will 404 if id not found */
   getSubject(id: number): Observable<Subject> {
    const url = `${this.url}/${id}`;
    return this.http.get<Subject>(url).pipe(
      catchError(this.handleError<Subject>(`getSubject id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new subject to the server */
  addSubject (subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.url, subject, httpOptions).pipe(
      catchError(this.handleError<Subject>('addSubject'))
    );
  }

  /** DELETE: delete the subject from the server */
  deleteSubject (subject: Subject | number): Observable<Subject> {
    const id = typeof subject === 'number' ? subject : subject.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Subject>(url, httpOptions).pipe(
      catchError(this.handleError<Subject>('deleteSubject'))
    );
  }

  /** PUT: update the subject on the server */
  updateSubject (subject: Subject): Observable<any> {
    return this.http.put(this.url, subject, httpOptions).pipe(
      catchError(this.handleError<any>('updateSubject'))
    );
  }


  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
