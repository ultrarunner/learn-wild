import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DashboardComponent } from '../../dashboard-component';
import { NytService } from './nyt.service';
import { Nyt, Result } from '../../../model/nyt';
import { UpperCaseFirstLetterPipe } from '../../../pipe/upper-case-first-letter.pipe';

import { DialogService } from '../../../shared/simple-dialog/dialog.service';

@Component({
  selector: 'app-component-nyt',
  template: `
      <md-card masonry-brick style="min-width: 280px; max-width: 320px; margin: 5px;" (click)="onSelected()">
        <md-card-header *ngIf="results.length">
          <md-card-title>{{title}} <font color='red'>|</font> {{ options | upperCaseFirstLetter }}</md-card-title>
        </md-card-header>
        <md-card-content *ngIf="!results.length">
          <md-spinner style="margin-bottom: 10px;"></md-spinner>              
          Loading data from... {{end_point}}
        </md-card-content>
        <md-card-content *ngIf="results.length">
          <md-list-item *ngFor="let item of results">         
            <button md-icon-button (click)="openDialog(item)">
              <md-icon>info</md-icon>
            </button>
          <button md-icon-button (click)='onOpenLink(item)' mdTooltip="Open Article in New Window" mdTooltipPosition="above">
            <md-icon>open_in_new</md-icon>
          </button>            
            {{item.title}}             
          </md-list-item>
        </md-card-content>
        <md-card-actions style="text-align: right;">
          <button md-mini-fab (click)='onPullData()' mdTooltip="Refresh" mdTooltipPosition="above">
            <md-icon>refresh</md-icon>
          </button>
        </md-card-actions>
      </md-card>`
})

export class NytComponent implements DashboardComponent {

  private nyt: any = {};
  private results: any = [];

  @Input() title: string;
  @Input() end_point: string;
  @Input() count: number;
  @Input() options: string;

  @Output() componentSelected = new EventEmitter();

  constructor(
    private nytService: NytService,
    private dialogService: DialogService,
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
        this.nyt = result,
          this.results = result.results.filter((item, index) => { return index < this.count; });
      },
      error => console.log(error)
      );
  }

  openDialog(result: Result) {
    // console.log(feedEntry);
    const title = result.title + '| ' + new DatePipe('en-US').transform(result.published_date, 'yyyy-MM-dd');
    this.dialogService.confirm(title, result.abstract);
  }

  onSelected() {
    // console.log('Component Selection Event Emitted:'  + this.end_point);
    this.componentSelected.emit(this);
  }
}
