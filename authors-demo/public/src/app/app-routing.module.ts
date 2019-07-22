import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAuthorComponent } from './new-author/new-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';



const routes: Routes = [
  { path: 'authors', component: AllAuthorsComponent },
  { path: 'authors/new', component: NewAuthorComponent },
  { path: 'authors/edit/:id', component: EditAuthorComponent },
  { path: '', pathMatch: 'full', redirectTo: '/authors'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
