import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogNewCmComponent } from '../dialog-new-cm/dialog-new-cm.component';
import { ServiceCmService } from '../service-cm.service';
import { Router } from '@angular/router';


declare function getPoints(city1: string, cit2: string, divid:string): any;

export interface CM {
  participants: number;
  start: string;
  end: string;
  owner: string;
  description: string;
  joined: boolean;
}

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css']
})
export class ViewDashboardComponent implements OnInit {


  constructor(public dialog: MatDialog,
    public cms: ServiceCmService,
    public router: Router) { }
  

  openDialog(): void {    
    const dialogRef = this.dialog.open(DialogNewCmComponent, {
      width: '250px',
      data: {name: "tralal", animal: "lala"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


  clickCms(id){
    this.cms.setClicked(id)
  }

  ngOnInit() {
    for(let i = 0; i < this.cms.cms.length; i++){
      let el = this.cms.cms[i]
      console.log(el)
      getPoints( el.start + ", Germany", el.end + ", Germany", "divid" + el.id)
    }
    
  }


}
