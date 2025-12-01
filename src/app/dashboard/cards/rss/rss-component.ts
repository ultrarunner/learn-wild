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
      <mat-card style="min-width: 280px; max-width: 412px; margin: 5px;" (click)="onSelected()">
        <mat-card-header *ngIf="items.length">
          <div matCardAvatar *ngIf="feed.image!=''"><img src="{{feed.image}}" style="width: 30px;"/></div>
          <mat-card-title>{{feed.title}} <font color="red">|</font> {{feed.author}}</mat-card-title>
          <mat-card-subtitle>{{feed.description}} </mat-card-subtitle>
        </mat-card-header>
        <mat-card-content *ngIf="!items.length">
          <mat-spinner style="margin-bottom: 10px;"></mat-spinner>              
          Loading data from... {{end_point}}
        </mat-card-content>
        <mat-card-content *ngIf="items.length">
          <mat-list-item *ngFor="let item of items">
            <div class="mat-list-item-text" layout="column">                     
              <button mat-icon-button (click)="openDialog(item)" matTooltip="View Summary">
                <mat-icon [style.color]="item.today ? '#b62025' : 'white'">info</mat-icon>
              </button>
              <button mat-icon-button *ngIf="item && item.link" (click)="onOpenItemLink(item)" matTooltip="Open in New Window" matTooltipPosition="above">
                <mat-icon>open_in_new</mat-icon>
              </button>            
              <button matTooltip="Play Audio" mat-icon-button *ngIf="item.enclosure.type != null" (click)="onSelectMedia(item.enclosure)" matTooltipPosition="above">
                <mat-icon>play_circle_filled</mat-icon>
              </button>            
              {{item.title}}
            </div>            
          </mat-list-item>
        </mat-card-content>
        <mat-card-actions style="text-align: right;">
          <button mat-mini-fab (click)="onOpenFeedLink(feed)" matTooltip="Open in New Window" matTooltipPosition="above" target="_blank">
            <mat-icon>open_in_new</mat-icon>
          </button>
          <button mat-mini-fab (click)='onPullData()' matTooltip="Refresh" matTooltipPosition="above">
            <mat-icon>refresh</mat-icon>
          </button>
        </mat-card-actions>
      </mat-card>
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
