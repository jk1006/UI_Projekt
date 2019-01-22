import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { WeekOverviewComponent } from './week-overview/week-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { SubjectCreationComponent } from './subject-creation/subject-creation.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    SubjectDetailComponent,
    WeekOverviewComponent,
    SubjectCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SubjectsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
