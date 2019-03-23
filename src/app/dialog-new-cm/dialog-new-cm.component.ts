import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


import {MatDatepickerModule} from '@angular/material/datepicker'; 

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
  end: string

  constructor(
    public dialogRef: MatDialogRef<DialogNewCmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  onNoClick(){
    this.dialogRef.close()
  }

  ngOnInit() {
  }

}
