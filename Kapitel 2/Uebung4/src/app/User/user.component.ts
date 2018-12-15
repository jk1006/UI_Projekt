import { Component, OnInit } from "@angular/core";
import { LoggerService } from "../Logger/logger.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  vVorname: string = "Max";
  vNachname: string = "Mustermann";
  vStudiengang: string = "Medieninformatik";
  vFachsemester: number = 4;
  vStudent: boolean = false;
  vBildungseinrichtung: string = "Hochschule Kaiserslautern";

  constructor(logger: LoggerService) {
    // Correct source file name and line number :)
    logger.info("UserComponent: logger.info()");
    logger.warn("UserComponent: logger.warn()");
    logger.error("UserComponent: logger.error()");
  }

  ngOnInit() {}

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
