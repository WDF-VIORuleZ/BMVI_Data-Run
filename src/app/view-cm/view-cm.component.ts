import { Component, OnInit } from '@angular/core';
import { ServiceCmService } from '../service-cm.service';

declare function getPoints(city1: string, cit2: string, divid:string): any;


@Component({
  selector: 'app-view-cm',
  templateUrl: './view-cm.component.html',
  styleUrls: ['./view-cm.component.css']
})
export class ViewCmComponent implements OnInit {
  btn_label = ""

  constructor(
    public cms: ServiceCmService
  ) {}

  join_cm(){
    this.cms.clicked.joined = !this.cms.clicked.joined
    if(this.cms.clicked.joined){
      this.btn_label="LEAVE"
    } else {
      this.btn_label="JOIN"
    }
  }

  ngOnInit() {
    if(this.cms.clicked.joined){
      this.btn_label="LEAVE"
    } else {
      this.btn_label="JOIN"
    }
    getPoints( this.cms.clicked.start, this.cms.clicked.end , "divid" + this.cms.clicked.id)
   
  }

}
