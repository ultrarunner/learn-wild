import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TodayPipe } from '../../../pipe/today.pipe';
import { DashboardComponent } from '../../dashboard-component';
import { NytService } from './nyt.service';
import { Nyt, Result } from '../../../model/nyt';
import { UpperCaseFirstLetterPipe } from '../../../pipe/upper-case-first-letter.pipe';

import { DialogService } from '../../../shared/simple-dialog/dialog.service';
import { EventService } from '../../../shared/events.service';

@Component({
  selector: 'app-component-nyt',
  template: `
      <mat-card style="min-width: 280px; max-width: 412px; margin: 5px;" (click)="onSelected()">
        <mat-card-header *ngIf="results.length">
          <mat-card-title>{{title}} <font color='red'>|</font> {{ options.section | upperCaseFirstLetter }}</mat-card-title>
        </mat-card-header>
        <mat-card-content *ngIf="!results.length">
          <mat-spinner style="margin-bottom: 10px;"></mat-spinner>              
          Loading data from... {{end_point}}
        </mat-card-content>
        <mat-card-content *ngIf="results.length">
          <mat-list-item *ngFor="let item of results">
            <div class="mat-list-item-text" layout="column">         
              <button mat-icon-button (click)="openDialog(item)">
                <mat-icon [style.color]="item.today ? '#b62025' : 'white'">info</mat-icon>
              </button>
              <button mat-icon-button (click)='onOpenLink(item)' matTooltip="Open Article in New Window" matTooltipPosition="above">
                <mat-icon>open_in_new</mat-icon>
              </button>            
              {{item.title}}
            </div>             
          </mat-list-item>
        </mat-card-content>
        <mat-card-actions style="text-align: right;">
          <button mat-mini-fab (click)='onPullData()' matTooltip="Refresh" matTooltipPosition="above">
            <mat-icon>refresh</mat-icon>
          </button>
        </mat-card-actions>
      </mat-card>`,
  providers: [TodayPipe]
})

export class NytComponent implements DashboardComponent {

  private nyt: any = {};
  private results: any = [];

  @Input() title: string;
  @Input() end_point: string;
  @Input() count: number;
  @Input() options: any;

  @Output() componentSelected = new EventEmitter();

  constructor(
    private nytService: NytService,
    private dialogService: DialogService,
    private radio: EventService,
    private todayPipe: TodayPipe
  ) { }

  ngOnInit(): void {
    this.onPullData();
  }

  onOpenLink(result: Result) {
    window.open(result.short_url, '_blank');
  }

  onPullData() {
    this.nytService.getFeedContent(this.options)
      .delay(1000)
      .subscribe(
      result => {
        // console.log(result.items);
        this.nyt = result;
        this.results = result.results.filter((item, index) => {
          item.today = this.todayPipe.transform(item.published_date.toString());
          item.feedTitle = this.title;
          if (item.today && (index < this.count)) {
            //console.log('Hot Article (NYT) Radio Casting:' + item.title);
            this.radio.cast("HotArticle:nyt", item);
          }
          return index < this.count;
        });
      },
      error => console.log(error)
      );
  }

  openDialog(result: Result) {
    // console.log(feedEntry);
    const title = result.feedTitle + ' - ' + this.options.section + ' | ' + result.title + ' | ' + new DatePipe('en-US').transform(result.published_date, 'yyyy-MM-dd');
    this.dialogService.confirm(title, result.abstract);
  }

  onSelected() {
    // console.log('Component Selection Event Emitted:'  + this.end_point);
    this.componentSelected.emit(this);
  }
}
