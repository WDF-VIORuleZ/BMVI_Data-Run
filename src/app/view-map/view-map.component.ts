import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.css']
})

export class ViewMapComponent implements OnInit {
  // For api requests
  key = 'AIzaSyAub4P6S9I8vXr95WjIRMQObLIbBUUISUg'
  title: string = 'AGM-GMAPS tests';

  public lat: number = 59.678418;
  public lng: number = 7.809007;

  locationChosen: boolean = false;

  // agm-directions
  public org: any;
  public dest: any;
  
  onChoseLocation(event) {
    this.lat = event.lat;
    this.lng = event.lng;
    this.locationChosen = true;
  }

  getDirection() {
    this.org = { lat: 24.799448, lng: 120.979021 };
    this.dest = { lat: 24.799524, lng: 120.975017 };
  }

  constructor() { }

  ngOnInit() {
    this.getDirection();
  }

}
