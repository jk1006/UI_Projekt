import { Component } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vPerson = new User("Peter", "Müller", "DMM", 2, true, "Hochschule Zweibrücken");

  newPerson():string{
    var person2: User = new User("Max", "Mustermann", "MI", 5, true, "Hochschule Kaiserslautern");
    return person2.toString2();
  }
}