import { Component, OnInit } from '@angular/core';

export interface CM {
  participants: number;
  start: string;
  end: string;
  owner: string;
}

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css']
})
export class ViewDashboardComponent implements OnInit {
  cms = [
    {participants: 10, start: "Karlsruhe", end: "Düsseldorf", owner: "Nico"},
    {participants: 10, start: "Berlin", end: "Braunschweig", owner: "Max"},
    {participants: 14, start: "Potsdam", end: "Spreewald", owner: "Lara"}];
  
    lat: number = 51.678418;
    lng: number = 7.809007;
    
  constructor() { }

  ngOnInit() {
  }


}
