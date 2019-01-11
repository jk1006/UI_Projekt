import { Injectable } from '@angular/core';
import {Http, URLSearchParams, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DBServiceService {
  constructor(private http: Http) {
  }

  public find(from: string, to: string) {

    let url = 'http://www.angular.at/api/flight';

    let headers = new Headers();
    headers.set('Accept', 'text/json');

    let search = new URLSearchParams();
    search.set('from', from);
    search.set('to', to);

    return this.http.get(url, { headers, search })
      .map(resp => resp.json());
  }
}
