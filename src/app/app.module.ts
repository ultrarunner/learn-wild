import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MasonryModule } from 'angular2-masonry';

import { Dashboard } from './dashboard/dashboard';
import { DashboardComponentRss } from './dashboard/dashboard-component-rss';
import { DashboardComponentOutlet } from './dashboard/dashboard-component-outlet';

import { AppComponent } from './app.component';

// import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedService } from './feed.service';
import { DialogService } from './shared/simple-dialog/dialog.service';
import { NgRadio } from './shared/events.service';

// shared
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { SimpleDialogComponent } from './shared/simple-dialog/simple-dialog.component';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { SingleMediaPlayerComponent } from './shared/single-media-player/single-media-player.component';

@NgModule({

  declarations: [
    AppComponent,
    Dashboard,
    DashboardComponentOutlet,
    DashboardComponentRss,
    //FeedCardComponent,
    StripHtmlTagsPipe,
    SimpleDialogComponent,
    SingleMediaPlayerComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule,

    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule,

    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],

  providers: [
    FeedService,
    DialogService,
    NgRadio
  ],

  bootstrap: [
    AppComponent
    // don't do this:
    // http://stackoverflow.com/questions/38787795/why-ngoninit-called-twice
    // SingleMediaPlayerComponent
  ],

  entryComponents: [
    DashboardComponentRss,
    SimpleDialogComponent
  ]
})
export class AppModule { }
