import { Location } from "@angular/common";
import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { AppComponent } from './app.component';

// dashboard
import { Dashboard } from './dashboard/dashboard';
import { DashboardComponentOutlet } from './dashboard/dashboard-component-outlet';

import { ToolbarComponent } from './shared/toolbar/toolbar.component';

// import {
//   routes
// } from "./app.module"

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        Dashboard,
        DashboardComponentOutlet,
        ToolbarComponent
      ],
      imports: [
        BrowserModule,
        //RouterTestingModule.withRoutes(routes),
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
