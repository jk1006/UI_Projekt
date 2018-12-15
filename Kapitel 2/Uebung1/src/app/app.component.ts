import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vVorname = 'Max';
  vNachname = 'Mustermann';
  vStudiengang = 'Medieninformatik';
  vFachsemester = 4;
  vStudent = true;
  vBildungseinrichtung = 'Hochschule Kaiserslautern';
}
