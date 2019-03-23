import { Injectable } from '@angular/core';
import { CM } from './view-dashboard/view-dashboard.component'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceCmService {
  cms = [
    {id:10, participants: 5, start: "Berlin Hauptbahnhof", end: "Berlin Ostkreuz", owner: "Jaque", description: "Suche nette Mitfahrerinnen um die Stadt kennenzulernen! Freu mich schon mequa!!!", joined: false, time: "heute, 14.20"},
    {id:11, participants: 23, start: "Berlin, Freiheitsstatue", end: "Berlin Kadewe", owner: "Nico", description: "Bisschen Feierabend-Shoppen am kadewe? anyone?", joined: false, time: "heute, 16.45"},
    {id:12, participants: 14, start: "Berlin, Invalidenplatz", end: "Berlin Alexanderplatz", owner: "Lara", description: "Spree Tourchen gefällig?", joined: false, time: "morgen, 08.15"}];
  
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
