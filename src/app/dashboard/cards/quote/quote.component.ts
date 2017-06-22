import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DashboardComponent } from '../../dashboard-component';
import { QuoteService } from '../../../shared/quote.service';
import { Quote } from '../../../model/quote';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-quote',
  template: `
      <md-card masonry-brick style="min-width: 280px; max-width: 412px; margin: 5px;" (click)="onSelected()">
        <md-card-header>
          <div md-card-avatar><img src="/assets/borntolearnwild.png" style="margin-right: 10px; width:30px; height: 30px;"/></div>
          <md-card-title>{{title}} <font color="red">|</font> Born To Learn Wild</md-card-title>
          <md-card-subtitle>A random quote.</md-card-subtitle>
        </md-card-header>

        <md-card-content *ngIf="!items.length">
          <md-list-item>         
            Waiting for latest quote... Come on! Give me something!
          </md-list-item>
        </md-card-content>

        <md-card-content>
          <md-list-item *ngFor="let item of items">         
            <p>
              <span>{{item.author}} <font color="red">|</font> {{item.source}}</span>
             <br>{{item.text}}
            </p>
          </md-list-item>
        </md-card-content>
      </md-card>
      `,
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements DashboardComponent {

  @Input() title: string;
  @Input() end_point: string;
  @Input() count: number;
  @Input() options: string;

  @Output() componentSelected = new EventEmitter();

  private items: any = [];

  constructor(
    private quoteService: QuoteService
  ) {
  }

  ngOnInit(): void {
    this.onPullData();
  }

  onPullData() {
    this.quoteService.getContent().subscribe(result => {
      this.items = result;
    });;
  }
}
