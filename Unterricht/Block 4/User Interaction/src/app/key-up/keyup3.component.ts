import { Component } from "@angular/core";

@Component({
  selector: "app-key-up3",
  template: `
    <input #box (keyup.enter)="onEnter(box.value)" />
    <p>{{ value }}</p>
  `
})
export class KeyUp3Component {
  value = "";
  onEnter(value: string) {
    this.value = value;
  }
}