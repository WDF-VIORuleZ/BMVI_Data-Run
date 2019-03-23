import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.css']
})

export class ViewMapComponent implements OnInit {

  title: string = 'Map routing';
  public lat: Number = 24.799448;
  public lng: Number = 120.979021;
 
  public origin: any;
  public destination: any;

  ngOnInit() {
    this.getDirection();
  }
 
getDirection() {
  this.origin = { lat: 24.799448, lng: 120.979021 };
  this.destination = { lat: 24.799524, lng: 120.975017 };
 

  // this.origin = 'Taipei Main Station';
  // this.destination = 'Taiwan Presidential Office';
}

}
