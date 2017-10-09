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
      <mat-card masonry-brick style="min-width: 280px; max-width: 412px; margin: 5px;" (click)="onSelected()">
        <mat-card-header>
          <div mat-card-avatar><img src="/assets/borntolearnwild.png" style="margin-right: 10px; width:30px; height: 30px;"/></div>
          <mat-card-title>{{title}} <font color="red">|</font> Born To Learn Wild</mat-card-title>
          <mat-card-subtitle>Today's news from your sources.</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content *ngIf="!nytItems.length && !rssItems.length && !podcastItems.length">
          <mat-list-item>         
            Waiting for latest news... Nothing so far. Great news!
          </mat-list-item>
        </mat-card-content>

        <mat-card-content>

          <!-- NYT ENTRIES -->
          <mat-list-item *ngFor="let item of nytItems">
            <div class="mat-list-item-text" layout="column">                   
              <button mat-icon-button (click)="onOpenNytDialog(item)" mdTooltip="View Summary">
                <mat-icon [style.color]="item.today ? '#b62025' : 'white'">info</mat-icon>
              </button>
              <button mat-icon-button (click)='onOpenNytLink(item)' mdTooltip="Open in New Window" mdTooltipPosition="above">
                <mat-icon>open_in_new</mat-icon>
              </button>            
              {{item.title}}
            </div>            
          </mat-list-item>

          <!-- RSS ENTRIES - ARTICLES -->
          <mat-list-item *ngFor="let item of rssItems">
            <div class="mat-list-item-text" layout="column">                     
              <button mat-icon-button (click)="onOpenRssDialog(item)" mdTooltip="View Summary">
                <mat-icon [style.color]="item.today ? '#b62025' : 'white'">info</mat-icon>
              </button>
              <button mat-icon-button (click)='onOpenRssLink(item)' mdTooltip="Open in New Window" mdTooltipPosition="above">
                <mat-icon>open_in_new</mat-icon>
              </button>         
              {{item.title}}
            </div>
          </mat-list-item>

          <!-- RSS ENTRIES - PODCASTS -->
          <mat-list-item *ngFor="let item of podcastItems">
            <div class="mat-list-item-text" layout="column">                     
              <button mat-icon-button (click)="onOpenRssDialog(item)" mdTooltip="View Summary">
                <mat-icon [style.color]="item.today ? '#b62025' : 'white'">info</mat-icon>
              </button>
              <button mat-icon-button (click)='onOpenRssLink(item)' mdTooltip="Open in New Window" mdTooltipPosition="above">
                <mat-icon>open_in_new</mat-icon>
              </button>         
              <button mdTooltip="Play Audio" mat-icon-button *ngIf="item.enclosure.link != null" (click)="onSelectMedia(item.enclosure)">
                <mat-icon>play_circle_filled</mat-icon>
              </button>                    
              {{item.title}}
            </div>            
          </mat-list-item>                     

        </mat-card-content>
      </mat-card>
      `
})

export class HotComponent implements DashboardComponent {

  public rssItems: any = [];
  public nytItems: any = [];
  public podcastItems: any = [];
  public today: Date = new Date();

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
    this.rssItems = new Array<Object>();
    this.podcastItems = new Array<Object>();
  }

  ngOnInit(): void {
    this.radio.on('HotArticle:nyt').subscribe(message => {
      //console.log('Hot Article (NYT) Radio Receiving:' + (<Result>message).title);
      if (this.title == "Today's Articles") {
        this.nytItems.push(<Result>message);
      }
    });
    this.radio.on('HotArticle:rss').subscribe(message => {
      //console.log('Hot Article (RSS) Radio Receiving:' + (<FeedEntry>message).title);
      if (this.title == "Today's Articles") {
        this.rssItems.push(<FeedEntry>message);
      }
    });
    this.radio.on('HotPodcast:rss').subscribe(message => {
      //console.log('Hot Article (RSS) Radio Receiving:' + (<FeedEntry>message).title);
      if (this.title == "Today's Podcasts") {
        this.podcastItems.push(<FeedEntry>message);
      }
    });
    //console.log("title: " + this.title);
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
    const title = item.feedTitle + ' | ' + item.title + ' | ' + new DatePipe('en-US').transform(item.published_date, 'yyyy-MM-dd');
    this.dialogService.confirm(title, item.abstract);
  }

  onOpenRssLink(item: FeedEntry) {
    window.open(item.link, '_blank');
  }

  onOpenRssDialog(item: FeedEntry) {
    const title = item.feedtitle + ' | ' + item.title + ' | ' + new DatePipe('en-US').transform(item.pubDate, 'yyyy-MM-dd');
    this.dialogService.confirm(title, item.description);
  }
}
