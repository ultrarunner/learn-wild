import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DashboardComponent } from '../../dashboard-component';
import { RssService } from './rss.service';
import { FeedInfo, FeedEntry, FeedEnclosure } from '../../../model/feed';

import { DialogService } from '../../../shared/simple-dialog/dialog.service';
import { EventService } from '../../../shared/events.service';
import { TodayPipe } from '../../../pipe/today.pipe';


@Component({
  selector: 'app-component-rss',
  template: `
      <md-card masonry-brick style="min-width: 280px; max-width: 412px; margin: 5px;" (click)="onSelected()">
        <md-card-header *ngIf="items.length">
          <div md-card-avatar *ngIf="feed.image!=''"><img src="{{feed.image}}" style="width: 30px;"/></div>
          <md-card-title>{{feed.title}} <font color="red">|</font> {{feed.author}}</md-card-title>
          <md-card-subtitle>{{feed.description}} </md-card-subtitle>
        </md-card-header>
        <md-card-content *ngIf="!items.length">
          <md-spinner style="margin-bottom: 10px;"></md-spinner>              
          Loading data from... {{end_point}}
        </md-card-content>
        <md-card-content *ngIf="items.length">
          <md-list-item *ngFor="let item of items">
            <div class="md-list-item-text" layout="column">                     
              <button md-icon-button (click)="openDialog(item)" mdTooltip="View Summary">
                <md-icon [style.color]="item.today ? '#b62025' : 'white'">info</md-icon>
              </button>
              <button md-icon-button *ngIf="item && item.link" (click)="onOpenItemLink(item)" mdTooltip="Open in New Window" mdTooltipPosition="above">
                <md-icon>open_in_new</md-icon>
              </button>            
              <button mdTooltip="Play Audio" md-icon-button *ngIf="item.enclosure.type != null" (click)="onSelectMedia(item.enclosure)" mdTooltipPosition="above">
                <md-icon>play_circle_filled</md-icon>
              </button>            
              {{item.title}}
            </div>            
          </md-list-item>
        </md-card-content>
        <md-card-actions style="text-align: right;">
          <button md-mini-fab (click)="onOpenFeedLink(feed)" mdTooltip="Open in New Window" mdTooltipPosition="above" target="_blank">
            <md-icon>open_in_new</md-icon>
          </button>
          <button md-mini-fab (click)='onPullData()' mdTooltip="Refresh" mdTooltipPosition="above">
            <md-icon>refresh</md-icon>
          </button>
        </md-card-actions>
      </md-card>
      `,
  providers: [TodayPipe]
})

export class RssComponent implements DashboardComponent {

  private feed: any = {};
  private items: any = [];
  private today: Date = new Date();

  @Input() title: string;
  @Input() end_point: string;
  @Input() count: number;
  @Input() options: string;

  @Output() componentSelected = new EventEmitter();

  constructor(
    private feedService: RssService,
    private dialogService: DialogService,
    private radio: EventService,
    private todayPipe: TodayPipe
  ) { }

  ngOnInit(): void {
    this.onPullData();
  }

  onPullData() {
    this.feedService.getFeedContent(this.end_point)
      .delay(1000)
      .subscribe(
      result => {
        //console.log(result.items);
        this.feed = result.feed;
        if (result && result.items)
          this.items = result.items.filter((item, index) => {
            item.today = this.todayPipe.transform(item.pubDate.toString());
            item.feedtitle = this.feed.title;
            if (item.today && (index < this.count)) {
              if (item.enclosure.link != null) {
                //console.log('Hot Podcast (RSS) Radio Casting:' + item.title);                            
                this.radio.cast("HotPodcast:rss", item);
              } else {
                //console.log('Hot Article (RSS) Radio Casting:' + item.title);              
                this.radio.cast("HotArticle:rss", item);
              }
            }
            return index < this.count;
          });
      },
      error => console.log(error)
      );
  }

  openDialog(feedEntry: FeedEntry) {
    // console.log(feedEntry);
    const title = feedEntry.feedtitle + ' | ' + feedEntry.title + ' | ' + new DatePipe('en-US').transform(feedEntry.pubDate, 'yyyy-MM-dd');
    this.dialogService.confirm(title, feedEntry.description);
  }

  onSelectMedia(enclosure: FeedEnclosure) {
    //console.log('Media Selection Radio Casting:' + enclosure.link);
    const mediaType = enclosure.type.substring(0, enclosure.type.indexOf('/'));
    const key = 'PlayMedia:' + mediaType;
    // console.log('key: ' + key);
    this.radio.cast(key, enclosure);
  }

  onSelected() {
    // console.log('Component Selection Event Emitted:'  + this.end_point);
    this.componentSelected.emit(this);
  }

  onOpenItemLink(item: FeedEntry) {
    if (item && item.link && item.link !== '') {
      window.open(item.link, '_blank');
    }
  }

  onOpenFeedLink() {
    window.open(this.feed.link, '_blank');
  }
}
