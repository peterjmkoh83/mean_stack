import { AddreviewComponent } from './addreview/addreview.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { HomeComponent } from './home/home.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewComponent } from './review/review.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: 'movies', component: HomeComponent },
  { path: 'movies/new', component: AddmovieComponent },
  { path: 'movies/review/:id', component: AddreviewComponent },
  { path: 'movies/:id', component: ReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
