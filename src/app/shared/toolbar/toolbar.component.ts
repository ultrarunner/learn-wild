import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
    selector: 'toolbar',
    template: `
        <md-toolbar style="background-color: black;">
            <span style="color: white;">
                <a href="\">
                    <img 
                    src="/assets/borntolearnwild.png" 
                    style="margin-right: 10px; width:30px; height: 30px;" 
                    title="Learn Wild | Not every site can become a great source of knowledge but a great source of knowledge can come from any site. Just keep learning.">
                </a>                
            </span>
            <span class="example-spacer" style="text-align:center; white-space:pre-wrap; font-size: 0.6em;">
                Learn Wild <font color="red" > | </font> Never Stop Learning. Ever.           
            </span>

            <button md-icon-button [mdMenuTriggerFor]="menu">
                <md-icon style="color: white;" *ngIf="!(currentUser)">account_circle</md-icon>
                <md-icon style="color: white;" *ngIf="(currentUser)">face</md-icon>
            </button>
            
            <md-menu #menu="mdMenu">
                <button md-menu-item (click)="signInWithGoogle()" *ngIf="!(currentUser)">
                    <button md-raised-button color="warn">Google</button>
                </button>
                <button md-menu-item (click)="githubLogin()" *ngIf="!(currentUser)">
                    <button md-raised-button color="warn">GitHub</button>
                </button>
                <button md-menu-item (click)="twitterLogin()" *ngIf="!(currentUser)">
                    <button md-raised-button color="warn">Twitter</button>
                </button>                
                <md-list class="mat-list-stacked" *ngIf="(currentUser)">
                    <md-list-item style="font-weight: bold;">{{currentUser.email}}</md-list-item>
                </md-list>                
                <button md-menu-item (click)="logout()" *ngIf="(currentUser)">
                    <button md-raised-button>Logout</button>
                </button>
            </md-menu>
        </md-toolbar>
        <md-toolbar style="background-color: black;">
            <span style="width: 100%"><app-single-media-player></app-single-media-player></span>        
        </md-toolbar>
    `
})

export class ToolbarComponent {

    currentUser$: FirebaseObjectObservable<firebase.User>;
    currentUser: firebase.User;

    constructor(private auth: AuthService, private router: Router) {}

  signInAnonymously(): void {
    this.auth.signInAnonymously()
      .then(() => this.postSignIn());
  }

  signInWithFacebook(): void {
    this.auth.signInWithFacebook()
      .then(() => this.postSignIn());
  }

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.router.navigate(['/test']);
  }
}
