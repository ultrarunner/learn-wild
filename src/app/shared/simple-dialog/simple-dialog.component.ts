import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-simple-dialog',
  template: `
      <h2 md-dialog-title>{{title}}</h2>
      <md-dialog-content [innerHtml]=message></md-dialog-content>
  `
})
export class SimpleDialogComponent implements OnInit {

  public message: string;
  public title: string;

  constructor(public dialogRef: MatDialogRef<SimpleDialogComponent>) { }

  ngOnInit() {
  }
}
