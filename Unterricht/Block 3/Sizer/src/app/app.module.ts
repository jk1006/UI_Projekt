import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SizerOneWayComponent } from './sizer-one-way/sizer-one-way.component';
import { SizerTwoWayComponent } from './sizer-two-way/sizer-two-way.component';


@NgModule({
  declarations: [
    AppComponent,
    SizerOneWayComponent,
    SizerTwoWayComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
