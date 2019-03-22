import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.css']
})

export class ViewMapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 59.678418;
  lng: number = 7.809007;

  constructor() { }
  ngOnInit() {
  }

}
