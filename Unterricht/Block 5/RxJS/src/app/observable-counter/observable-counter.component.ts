import { Component } from "@angular/core";
import { interval } from "rxjs";
@Component({
  selector: "app-observable-counter"
})
export class ObservableCounterComponent {
  constructor() {}
}

// Create an Observable that will publish a value on an interval
const secondsCounter = interval(1000);
// Subscribe to begin publishing values
secondsCounter.subscribe(n =>
  console.log(`It's been ${n} seconds since subscribing!`)
);