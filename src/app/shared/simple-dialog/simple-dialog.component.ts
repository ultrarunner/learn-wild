import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-simple-dialog',
  template: `
      <h2 mat-dialog-title>{{title}}</h2>
      <mat-dialog-content [innerHtml]=message></mat-dialog-content>
  `
})
export class SimpleDialogComponent implements OnInit {

  public message: string;
  public title: string;

  constructor(public dialogRef: MatDialogRef<SimpleDialogComponent>) { }

  ngOnInit() {
  }
}
