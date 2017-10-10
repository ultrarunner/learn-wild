import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { MasonryModule } from 'angular2-masonry';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents} from './app.routing';

// dashboard
import { Dashboard } from './dashboard/dashboard';
import { DashboardComponentOutlet } from './dashboard/dashboard-component-outlet';

// card components
import { RssComponent } from './dashboard/cards/rss/rss-component';
import { RssService } from './dashboard/cards/rss/rss.service';

// card services
import { NytComponent } from './dashboard/cards/nyt/nyt.component';
import { NytService } from './dashboard/cards/nyt/nyt.service';

import { QuoteComponent } from './dashboard/cards/quote/quote.component';
import { QuoteService } from './shared/quote.service';

// shared services
import { AuthService } from './shared/auth.service';
import { DialogService } from './shared/simple-dialog/dialog.service';
import { EventService } from './shared/events.service';
import { EndPointService } from './shared/endpoint.service';
import { AuthGuardService } from './shared/auth-guard.service';

import { SimpleDialogComponent } from './shared/simple-dialog/simple-dialog.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

// pipes
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { UpperCaseFirstLetterPipe } from './pipe/upper-case-first-letter.pipe';
import { TodayPipe } from './pipe/today.pipe';

// media player component
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { SingleMediaPlayerComponent } from './shared/single-media-player/single-media-player.component';
import { HotComponent } from './dashboard/cards/hot/hot.component';
import { environment } from '../environments/environment';

export const firebaseConfig = {
  apiKey: environment.firebaseConfig.apiKey, //"AIzaSyBqUwpcipAsqWtLtIlRlDpNfOT38B-sYwo",
  authDomain: environment.firebaseConfig.authDomain, //"learnwild-d9b69.firebaseapp.com",
  databaseURL: environment.firebaseConfig.databaseURL, // "https://learnwild-d9b69.firebaseio.com",
  projectId: environment.firebaseConfig.projectId, // "learnwild-d9b69",
  storageBucket: environment.firebaseConfig.storageBucket, //"learnwild-d9b69.appspot.com",
  messagingSenderId: environment.firebaseConfig.messagingSenderId //"187124471014"
};

@NgModule({

  declarations: [
    AppComponent,
    routingComponents,
    // LoginComponent,
    // ProtectedComponent,
    // HomeComponent,    
    Dashboard,
    DashboardComponentOutlet,

    RssComponent,
    NytComponent,

    UpperCaseFirstLetterPipe,
    StripHtmlTagsPipe,
    TodayPipe,

    SimpleDialogComponent,
    SingleMediaPlayerComponent,
    ToolbarComponent,
    HotComponent,
    QuoteComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MasonryModule,

    BrowserAnimationsModule,
    MaterialModule,

    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],

  providers: [
    DatePipe,
    RssService,
    NytService,
    QuoteService,
    DialogService,
    AuthService,
    EventService,
    EndPointService,
    AuthGuardService
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
    HotComponent,
    QuoteComponent,
    SimpleDialogComponent,
    ToolbarComponent
  ]
})

export class AppModule { }
