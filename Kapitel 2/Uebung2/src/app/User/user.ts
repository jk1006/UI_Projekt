import { OnInit } from "@angular/core";

export class User {
  vVorname: string;
  vNachname: string;
  vStudiengang: string;
  vFachsemester: number;
  vStudent: boolean;
  vBildungseinrichtung: string;

  constructor(
    vVorname: string,
    vNachname: string,
    vStudiengang: string,
    vFachsemester: number,
    vStudent: boolean,
    vBildungseinrichtung: string
  ) {
    this.vVorname = vVorname;
    this.vNachname = vNachname;
    this.vStudiengang = vStudiengang;
    this.vFachsemester = vFachsemester;
    this.vStudent = vStudent;
    this.vBildungseinrichtung = vBildungseinrichtung;
  }

  toString(): string {
    return (
      '<div style="text-align:left"><p>Nachname: ' +
      this.vNachname +
      "<br />Vorname: " +
      this.vVorname +
      " <br/>Studiengang: " +
      this.vStudiengang +
      "<br />Fachsemester: " +
      this.vFachsemester +
      " <br />Student: " +
      this.vStudent +
      " <br />Bildungseinrichtung: " +
      this.vBildungseinrichtung +
      "</p></div>"
    );
  }

  toString2(): string {
    return (
      "Nachname: " +
      this.vNachname +
      "\nVorname: " +
      this.vVorname +
      "\nStudiengang: " +
      this.vStudiengang +
      "\nFachsemester: " +
      this.vFachsemester +
      "\nStudent: " +
      this.vStudent +
      "\nBildungseinrichtung: " +
      this.vBildungseinrichtung
    );
  }
}
