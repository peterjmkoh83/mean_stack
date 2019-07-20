import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors/authors.component';
import { NewAuthorsComponent } from './new-authors/new-authors.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [  
  { path: '', component: AuthorsComponent},
  { path: 'new', component: NewAuthorsComponent},
  { path: 'edit/:id', component: EditComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
