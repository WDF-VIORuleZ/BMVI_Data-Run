import { Injectable } from '@angular/core';
import { CM } from './view-dashboard/view-dashboard.component'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceCmService {
  cms = [
    {id:1, participants: 10, start: "Karlsruhe", end: "Düsseldorf", owner: "Nico", description: "Kurze Ausfahrt", joined: false, time: "heute, 14.45"},
    {id:2, participants: 10, start: "Berlin", end: "Braunschweig", owner: "Max", description: "Mit Freunden Brötchen holen.", joined: false, time: "heute, 18.00"},
    {id:3, participants: 14, start: "Potsdam", end: "Spreewald", owner: "Lara", description: "Spree Tourchen gefällig?", joined: false, time: "morgen, 08.15"}];
  
  clicked: CM;

  constructor(
    public router: Router
  ) { }

  setClicked(id){
    for(let i = 0; i < this.cms.length; i++){
      let el = this.cms[i];
      if(el.id == id){
        this.clicked = el;
      }
    }
    this.router.navigate(['/cm'])
  }



}
