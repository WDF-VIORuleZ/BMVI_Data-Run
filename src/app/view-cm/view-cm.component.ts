import { Component, OnInit } from '@angular/core';
import { ServiceCmService } from '../service-cm.service';

declare function getPoints(city1: string, labelA:string, cit2: string, labelB: string, divid:string): any;


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
      this.cms.clicked.participants = this.cms.clicked.participants + 1

    } else {
      this.btn_label="JOIN"
      this.cms.clicked.participants = this.cms.clicked.participants - 1

    }
  }

  ngOnInit() {
    if(this.cms.clicked.joined){
      this.btn_label="LEAVE"
    } else {
      this.btn_label="JOIN"
      
    }
    getPoints( this.cms.clicked.start, this.cms.clicked.participants.toString(), this.cms.clicked.end ,"", "divid" + this.cms.clicked.id)
   
  }

}
