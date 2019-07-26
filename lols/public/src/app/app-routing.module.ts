import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { OneComponent } from './one/one.component';
import { EditComponent } from './edit/edit.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lols' },
  { path: 'lols', component: HomeComponent },
  { path: 'lols/new', component: NewComponent },
  { path: 'lols/:id', component: OneComponent },
  { path: 'lols/edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
