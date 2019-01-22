import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectCreationComponent } from './subject-creation/subject-creation.component';

const routes: Routes = [
  { path: 'create', component: SubjectCreationComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}