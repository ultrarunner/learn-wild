import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DashboardComponent } from '../../dashboard-component';
import { QuoteService } from '../../../shared/quote.service';
import { Quote } from '../../../model/quote';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-quote',
  template: `
      <mat-card masonry-brick style="min-width: 280px; max-width: 412px; margin: 5px;" (click)="onSelected()">
        <mat-card-header>
          <div mat-card-avatar><img src="/assets/borntolearnwild.png" style="margin-right: 10px; width:30px; height: 30px;"/></div>
          <mat-card-title>{{title}} <font color="red">|</font> Born To Learn Wild</mat-card-title>
          <mat-card-subtitle>A random quote.</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content *ngIf="!items.length">
          <mat-list-item>         
            Waiting for latest quote... Come on! Give me something!
          </mat-list-item>
        </mat-card-content>

        <mat-card-content>
          <mat-list-item *ngFor="let item of items">         
          <p>
            <span style="float:left;">"{{item.text}}"</span>            
            <span style="float:right;">{{item.author}}</span>
            <span style="float:right; clear: both;">{{item.source}}</span>            
          </p>
          </mat-list-item>
        </mat-card-content>
      </mat-card>
      `,
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements DashboardComponent {

  @Input() title: string;
  @Input() end_point: string;
  @Input() count: number;
  @Input() options: string;

  @Output() componentSelected = new EventEmitter();

  items: Quote[] = [];

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.onPullData();
  }

  onPullData() {
    this.quoteService.getContent().subscribe(result => {
      //console.log(result);
      if (result.length)
        this.items.push(result[Math.floor(Math.random() * result.length)]);
    });
  }

  onSelected() {
    // console.log('Component Selection Event Emitted:'  + this.end_point);
    this.componentSelected.emit(this);
  }  
}
