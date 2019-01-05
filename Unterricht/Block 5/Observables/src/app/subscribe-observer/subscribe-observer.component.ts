import { Component } from "@angular/core";
import { of } from 'rxjs';

@Component({
  selector: "app-subscribe-observer"
})
export class SubscribeObserverComponent {
  constructor() {}
}

// Create simple observable that emits three values
const myObservable = of(1, 2, 3);

// Create observer object
const myObserver = {
  next: x => console.log("Observer got a next value: " + x),
  error: err => console.error("Observer got an error: " + err),
  complete: () => console.log("Observer got a complete notification")
};

// Execute with the observer object
myObservable.subscribe(myObserver);