import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';

// dashboard
import { Dashboard } from './dashboard/dashboard';
import { DashboardComponentOutlet } from './dashboard/dashboard-component-outlet';

// card components
import { RssComponent } from './dashboard/cards/rss/rss-component';
import { RssService } from './dashboard/cards/rss/rss.service';

import { NytComponent } from './dashboard/cards/nyt/nyt.component';
import { NytService } from './dashboard/cards/nyt/nyt.service';

// shared services
import { DialogService } from './shared/simple-dialog/dialog.service';
import { NgRadio } from './shared/events.service';
import { SimpleDialogComponent } from './shared/simple-dialog/simple-dialog.component';

import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';

// media player component
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { SingleMediaPlayerComponent } from './shared/single-media-player/single-media-player.component';
import { UpperCaseFirstLetterPipe } from './pipe/upper-case-first-letter.pipe';

@NgModule({

  declarations: [
    AppComponent,
    Dashboard,
    DashboardComponentOutlet,
    RssComponent,
    NytComponent,

    UpperCaseFirstLetterPipe,    
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
    DatePipe,
    RssService,
    NytService,
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
    RssComponent,
    NytComponent,
    SimpleDialogComponent
  ]
})
export class AppModule { }
