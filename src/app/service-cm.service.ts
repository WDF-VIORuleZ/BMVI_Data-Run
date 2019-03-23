import { Injectable } from '@angular/core';
import { CM } from './view-dashboard/view-dashboard.component'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceCmService {
  cms = [
    {id:1, participants: 10, start: "Berlin Hauptbahnhof", end: "Berlin Ostkreuz", owner: "Max", description: "Mit Freunden Brötchen holen.", joined: false, time: "heute, 18.00"},
    {id:2, participants: 10, start: "Karlsruhe", end: "Karlsruhe-Durlach", owner: "Nico", description: "Kurze Ausfahrt", joined: false, time: "heute, 14.45"},
    {id:3, participants: 14, start: "Berlin Invalidenplatz", end: "Berlin Alexanderplatz", owner: "Lara", description: "Spree Tourchen gefällig?", joined: false, time: "morgen, 08.15"}];
  
  clicked: CM;

  constructor(
    public router: Router
  ) { }

  setClicked(id){
    for(let i = 0; i < this.cms.length; i++){
      let el = this.cms[i];
      if(el.id == id){
        this.clicked = el;
        console.log("found")
      }
      console.log(this.clicked)
    }
    this.router.navigate(['/cm'])
  }



}
