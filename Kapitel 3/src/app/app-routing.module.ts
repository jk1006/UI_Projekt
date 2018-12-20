import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component'
const routes: Routes = [
  { path: 'subjectdetail', component: SubjectDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
