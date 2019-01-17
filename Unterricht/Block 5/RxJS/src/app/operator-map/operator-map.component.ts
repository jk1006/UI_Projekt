import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "app-operator-map"
})
export class OperatorMapComponent {
  constructor() {}
}

const nums = of(1, 2, 3);

const squareValues = map((val: number) => val * val);
const squaredNums = squareValues(nums);

squaredNums.subscribe(x => console.log(x));