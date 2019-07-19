import { KrakowComponent } from './krakow/krakow.component';
import { LosAngelesComponent } from './los-angeles/los-angeles.component';
import { PalmSpringComponent } from './palm-spring/palm-spring.component';
import { SeattleComponent } from './seattle/seattle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'krakow', component: KrakowComponent }, 
  { path: 'los-angeles', component: LosAngelesComponent }, 
  { path: 'palmspring', component: PalmSpringComponent }, 
  { path: 'seattle', component: SeattleComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
