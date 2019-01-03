import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule }   from '@angular/forms';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectForm2Component } from './subject-form/subject-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectFormComponent,
    SubjectForm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 





