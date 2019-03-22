import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewMapComponent } from './view-map/view-map.component'
import { MatMenuModule } from '@angular/material/menu';
import { ViewHomeComponent } from './view-home/view-home.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ViewMapComponent,
    ViewHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
