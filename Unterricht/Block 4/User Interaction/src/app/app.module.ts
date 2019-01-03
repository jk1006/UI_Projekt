import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/clickme.component';
import { KeyUp1Component } from './key-up/keyup1.component';
import { KeyUp2Component } from './key-up/keyup2.component';
import { KeyUp3Component } from './key-up/keyup3.component';
import { KeyUp4Component } from './key-up/keyup4.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyUp1Component,
    KeyUp2Component,
    KeyUp3Component,
    KeyUp4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
