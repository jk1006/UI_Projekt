import { Component } from "@angular/core"; import { ajax } from "rxjs/ajax";
import { map, retry, catchError } from "rxjs/operators"; import { of } from 'rxjs';
@Component({
  selector: "app-retry-operator",
})
export class RetryOperatorComponent {
  constructor() {}
}
const apiData = ajax("/api/data").pipe(
  retry(3), // Retry up to 3 times before failing
  map(res => {
    if (!res.response) {
      throw new Error("Value expected!");
    }
    return res.response;
  }),
  catchError(err => of([]))
);

apiData.subscribe({
  next(x) {
    console.log("data: ", x);
  },
  error(err) {
    console.log("errors already caught... will not run");
  }
});
