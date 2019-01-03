import { Component } from "@angular/core";
import { SUBJECTS } from "../subjects-mock";
import { Subject } from "../subject";

@Component({
  selector: "app-subject-form",
  templateUrl: "./subject-form.component.html",
  styleUrls: ["./subject-form.component.css"]
})
export class SubjectFormComponent {
  subjects = SUBJECTS;
  rooms = ["A2.03", "A2.04", "A2.05", "A2.06", "A2.07"];
  submitted = false;

  model = new Subject(1,"Grundlagen der Gestaltung","08:00","09:45", this.rooms[0]);

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}