import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KrakowComponent } from './krakow/krakow.component';
import { LosAngelesComponent } from './los-angeles/los-angeles.component';
import { PalmSpringComponent } from './palm-spring/palm-spring.component';
import { SeattleComponent } from './seattle/seattle.component';


@NgModule({
  declarations: [
    AppComponent,
    KrakowComponent,
    LosAngelesComponent,
    PalmSpringComponent,
    SeattleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
