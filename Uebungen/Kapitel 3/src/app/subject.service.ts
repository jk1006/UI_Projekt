import { Injectable } from '@angular/core';
import { Subject } from './subject';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  jsonResponse: string;
  constructor() { }
  getRequest(): string{
    const Http = new XMLHttpRequest();
    var url = 'http://localhost:3000/api/event/';
    var jsonResponse ="";
    var that = this;
    Http.onreadystatechange = function(){
      if(this.readyState == 4){
        that.jsonResponse = this.responseText;
      }
    };
    Http.open("GET", url, false);
    Http.send();
    return "";
  }
  getSubjects(): Subject[]{
    this.getRequest();
    console.log(this.jsonResponse);

    return JSON.parse(this.jsonResponse);
  }
}
