import { AllComponent } from './all/all.component';
import { OneComponent } from './one/one.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'commerces' },
  { path: 'commerces', component: AllComponent },
  { path: 'commerces/new', component: NewComponent },
  { path: 'commerces/:id', component: OneComponent },
  { path: 'commerces/edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
