import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SidebarComponent } from "./Components/Estructura/sidebar/sidebar.component";
 import {HeaderComponent  } from "./Components/Estructura/header/header.component";
import { HomeComponent } from './Components/Dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
