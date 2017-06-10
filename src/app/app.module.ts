import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { MasonryModule } from 'angular2-masonry';
import { AppComponent } from './app.component';

// dashboard
import { Dashboard } from './dashboard/dashboard';
import { DashboardComponentOutlet } from './dashboard/dashboard-component-outlet';

// card components
import { RssComponent } from './dashboard/cards/rss/rss-component';
import { RssService } from './dashboard/cards/rss/rss.service';

// card services
import { NytComponent } from './dashboard/cards/nyt/nyt.component';
import { NytService } from './dashboard/cards/nyt/nyt.service';

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
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBqUwpcipAsqWtLtIlRlDpNfOT38B-sYwo",
  authDomain: "learnwild-d9b69.firebaseapp.com",
  databaseURL: "https://learnwild-d9b69.firebaseio.com",
  projectId: "learnwild-d9b69",
  storageBucket: "learnwild-d9b69.appspot.com",
  messagingSenderId: "187124471014"
};

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [AuthGuardService]
  }
]

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    ProtectedComponent,
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
    HomeComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
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
    SimpleDialogComponent,
    ToolbarComponent
  ]
})
export class AppModule { }
