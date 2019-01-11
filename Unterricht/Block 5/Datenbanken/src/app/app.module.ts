import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { HttpModule } from '@angular/http';
import { DBServiceService } from './dbservice.service';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [DBServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
