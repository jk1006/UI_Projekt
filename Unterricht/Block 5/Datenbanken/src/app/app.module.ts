import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { SubjectService } from './subject.service';
import { SubjectsComponent } from './subjects/subjects.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, SubjectsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
