import { HttpService } from './http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { OneComponent } from './one/one.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    EditComponent,
    NewComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
