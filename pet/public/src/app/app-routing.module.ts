import { EditComponent } from './edit/edit.component';
import { AllComponent } from './all/all.component';
import { NewComponent } from './new/new.component';
import { OneComponent } from './one/one.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  { path: 'pets', component: AllComponent },
  { path: 'pets/new', component: NewComponent },
  { path: 'pets/:id', component: OneComponent },
  { path: 'pets/edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
