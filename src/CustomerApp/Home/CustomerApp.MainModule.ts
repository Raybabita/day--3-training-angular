
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent, MasterPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes),

  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})

export class MainModule { }
