import { Component } from "@angular/core";
import { User } from "./User/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  user: User = new User("Peter", "Person", "null", 1, false, "Hochschule Kaiserslautern");

  newUser(): string {
    var user2: User = new User("Max", "Mustermann", "DMM", 1, true, "Hochschule Kaiserslautern");
    return user2.toString2();
  }
}
