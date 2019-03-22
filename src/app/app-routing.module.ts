import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewMapComponent } from './view-map/view-map.component';
import { ViewHomeComponent } from './view-home/view-home.component';

const routes: Routes = [
  {path: 'home', component: ViewHomeComponent},
  {path: 'map', component: ViewMapComponent},
  {path: '**', component: ViewHomeComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
