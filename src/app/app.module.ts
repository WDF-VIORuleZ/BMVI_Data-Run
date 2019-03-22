import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewMapComponent } from './view-map/view-map.component'
import { MatMenuModule } from '@angular/material/menu';
import { ViewHomeComponent } from './view-home/view-home.component'; 

// Imports for google maps
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


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
    MatMenuModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAub4P6S9I8vXr95WjIRMQObLIbBUUISUg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
