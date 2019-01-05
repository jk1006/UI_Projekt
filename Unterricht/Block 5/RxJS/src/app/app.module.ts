import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableEventComponent } from './observable-event/observable-event.component';
import { ObservableCounterComponent } from './observable-counter/observable-counter.component';
import { OperatorMapComponent } from './operator-map/operator-map.component';
import { OperatorPipeComponent } from './operator-pipe/operator-pipe.component';
import { ErrorComponent } from './error/error.component';
import { RetryOperatorComponent } from './retry-operator/retry-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableEventComponent,
    ObservableCounterComponent,
    OperatorMapComponent,
    OperatorPipeComponent,
    ErrorComponent,
    RetryOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
