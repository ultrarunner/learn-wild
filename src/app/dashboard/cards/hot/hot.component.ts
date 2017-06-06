import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DashboardComponent } from '../../dashboard-component';

import { FeedInfo, FeedEntry, FeedEnclosure } from '../../../model/feed';
import { Nyt, Result } from '../../../model/nyt';

import { DialogService } from '../../../shared/simple-dialog/dialog.service';
import { EventService } from '../../../shared/events.service';
import { TodayPipe } from '../../../pipe/today.pipe';

@Component({
  selector: 'app-component-hot',
  template: `
      <md-card masonry-brick style="min-width: 280px; max-width: 412px; margin: 5px;" (click)="onSelected()">
        <md-card-header>
          <div md-card-avatar><img src="/assets/borntolearnwild.png" style="margin-right: 10px; width:30px; height: 30px;"/></div>
          <md-card-title>Today's Articles <font color="red">|</font> Born To Learn Wild</md-card-title>
          <md-card-subtitle>Today's news from your sources.</md-card-subtitle>
        </md-card-header>
        <md-card-content *ngIf="!nytItems.length">
          <md-spinner style="margin-bottom: 10px;"></md-spinner>              
          Waiting for latest news... {{end_point}}
        </md-card-content>

        <md-card-content>

          <!-- NYT ENTRIES -->
          <md-list-item *ngFor="let item of nytItems">         
            <button md-icon-button (click)="onOpenNytDialog(item)" mdTooltip="View Summary">
              <md-icon [style.color]="item.today ? '#b62025' : 'white'">info</md-icon>
            </button>
            <button md-icon-button (click)='onOpenNytLink(item)' mdTooltip="Open in New Window" mdTooltipPosition="above">
              <md-icon>open_in_new</md-icon>
            </button>            
            {{item.title}}            
          </md-list-item>

          <!-- RSS ENTRIES -->
          <md-list-item *ngFor="let item of rssItems">         
            <button md-icon-button (click)="onOpenRssDialog(item)" mdTooltip="View Summary">
              <md-icon [style.color]="item.today ? '#b62025' : 'white'">info</md-icon>
            </button>
            <button md-icon-button (click)='onOpenRssLink(item)' mdTooltip="Open in New Window" mdTooltipPosition="above">
              <md-icon>open_in_new</md-icon>
            </button>         
            <button mdTooltip="Play Audio" md-icon-button *ngIf="item.enclosure.type != null" (click)="onSelectMedia(item.enclosure)">
              <md-icon>play_circle_filled</md-icon>
            </button>                    
            {{item.title}}            
          </md-list-item>          

        </md-card-content>
      </md-card>
      `
})

export class HotComponent implements DashboardComponent {

  private rssItems: any = [];
  private nytItems: any = [];
  private today: Date = new Date();

  @Input() title: string;
  @Input() end_point: string;
  @Input() count: number;
  @Input() options: string;

  @Output() componentSelected = new EventEmitter();

  constructor(
    private dialogService: DialogService,
    private radio: EventService
  ) {
    this.nytItems = new Array<Object>();
  }

  ngOnInit(): void {
    this.radio.on('HotArticle:nyt').subscribe(message => {
      //console.log('Hot Article (NYT) Radio Receiving:' + (<Result>message).title);
      this.nytItems.push(<Result>message);
    });
    console.log(this.nytItems.length);

    this.radio.on('HotArticle:rss').subscribe(message => {
      //console.log('Hot Article (RSS) Radio Receiving:' + (<FeedEntry>message).title);
      this.rssItems.push(<FeedEntry>message);
    });
  }

  onSelectMedia(enclosure: FeedEnclosure) {
    console.log('Media Selection Radio Casting:' + enclosure.link);
    const mediaType = enclosure.type.substring(0, enclosure.type.indexOf('/'));
    const key = 'PlayMedia:' + mediaType;
    // console.log('key: ' + key);
    this.radio.cast(key, enclosure);
  }

  onSelected() {
    // console.log('Component Selection Event Emitted:'  + this.end_point);
    this.componentSelected.emit(this);
  }

  onOpenNytLink(item: Result) {
    window.open(item.short_url, '_blank');
  }

  onOpenNytDialog(item: Result) {
    const title = item.title + ' | ' + new DatePipe('en-US').transform(item.published_date, 'yyyy-MM-dd');
    this.dialogService.confirm(title, item.abstract);
  }

  onOpenRssLink(item: FeedEntry) {
    window.open(item.link, '_blank');
  }

  onOpenRssDialog(item: FeedEntry) {
    const title = item.title + ' | ' + new DatePipe('en-US').transform(item.pubDate, 'yyyy-MM-dd');
    this.dialogService.confirm(title, item.description);
  }
}
