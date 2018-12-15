import { Component, OnInit } from "@angular/core";
import { User } from "./user";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user = new User("Peter", "Person", "null", 1, false, "Hochschule Kaiserslautern");
  

  constructor() {
  }

  ngOnInit() {}
}
