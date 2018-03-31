import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  //fileNameDialogRef: MatDialogRef<FileNameDialogComponent>;

  constructor(private dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data : any) {
  }

  public closeDialog(){
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  public open() {
    //this.dialog.openDialogs();
  }
}
