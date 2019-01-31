import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit() {}
}
