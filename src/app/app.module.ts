import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewMapComponent } from './view-map/view-map.component'
import { ViewHomeComponent } from './view-home/view-home.component'; 

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { 
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule, 
  MatButton,
  MatHint,
  MatFormFieldModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule} from '@angular/material/';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';

import { AgmCoreModule } from '@agm/core';
import { DialogNewCmComponent } from './dialog-new-cm/dialog-new-cm.component';
import { ViewCmComponent } from './view-cm/view-cm.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewMapComponent,
    ViewHomeComponent,
    ViewDashboardComponent,
    DialogNewCmComponent,
    ViewCmComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAHNmhbDgYVzi5Tz8yLBNzLPuJkTRc1lPI'
    })
  ],
  providers: [],
  entryComponents: [
    DialogNewCmComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
