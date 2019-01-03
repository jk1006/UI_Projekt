import { Component } from "@angular/core";

@Component({
  selector: "app-key-up2",
  template: `
    <input #box (keyup)="onKey(box.value)" />
    <p>{{ values }}</p>
  `
})
export class KeyUp2Component {
  values = "";
  onKey(value: string) {
    this.values += value + " | ";
  }
}