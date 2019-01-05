import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateObservableComponent } from './create-observable/create-observable.component';
import { SubscribeObserverComponent } from './subscribe-observer/subscribe-observer.component';
import { MulitcastObserverComponent } from './mulitcast-observer/mulitcast-observer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateObservableComponent,
    SubscribeObserverComponent,
    MulitcastObserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
