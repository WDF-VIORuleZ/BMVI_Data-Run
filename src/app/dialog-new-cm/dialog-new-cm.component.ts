import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { ServiceCmService } from '../service-cm.service';

declare function getPoints(city1: string, labelA:string, cit2: string, labelB: string, divid:string): any;

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-dialog-new-cm',
  templateUrl: './dialog-new-cm.component.html',
  styleUrls: ['./dialog-new-cm.component.css']
})
export class DialogNewCmComponent implements OnInit {

  participants: number;
  start: string;
  end: string;

  val_to: string = "Berlin";
  val_from: string = "Hamburg";
  val_desc: string = "Beschreibung";
  val_time: string = "morgen, 22.00";

  constructor(
    private cms: ServiceCmService,
    public dialogRef: MatDialogRef<DialogNewCmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  onNoClick(){
    this.dialogRef.close()
  }

  add_cm(){
    let tmp = {id: (10-this.cms.cms.length),
      participants: 0,
      start: this.val_from,
      end: this.val_to,
      owner: "Nico",
      description: this.val_desc,
      joined: true,
      time: this.val_time}
    this.cms.cms.unshift(tmp );

    console.log(this.cms.cms)
    console.log(this.val_to)

    console.log(tmp)
    getPoints( tmp.start, tmp.participants.toString(), tmp.end, "", "divid" + tmp.id)


      this.dialogRef.close()
  }  

  ngOnInit() {
  } 
   
}
