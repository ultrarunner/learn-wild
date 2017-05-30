import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';

@Component({
    selector: 'toolbar',
    template: `
        <md-toolbar style="background-color: black;">
            <span style="color: white;">
                <a href="\">
                    <img 
                    src="/assets/borntolearnwild.png" 
                    style="margin-right: 10px; width:30px; height: 30px;" 
                    alt="Learn Wild | Not every site can become a great source of knowledge; but a great source of knowledge can come from any site.">
                </a>                
            </span>
            <span class="example-spacer"></span>
            <span style="width: 100%"><app-single-media-player></app-single-media-player></span>

            <button md-icon-button [mdMenuTriggerFor]="menu">
                <md-icon style="color: white;" *ngIf="!(authService.user | async)">account_circle</md-icon>
                <md-icon style="color: white;" *ngIf="(authService.user | async)">face</md-icon>
            </button>
            
            <md-menu #menu="mdMenu">
                <button md-menu-item (click)="googleLogin()" *ngIf="!(authService.user | async)">
                    <button md-raised-button>Google</button>
                </button>
                <button md-menu-item (click)="githubLogin()" *ngIf="!(authService.user | async)">
                    <button md-raised-button>GitHub</button>
                </button>
                <button md-menu-item (click)="twitterLogin()" *ngIf="!(authService.user | async)">
                    <button md-raised-button>Twitter</button>
                </button>                
                <md-list class="mat-list-stacked" *ngIf="(authService.user | async)">
                    <md-list-item style="font-weight: bold;">{{profile}}</md-list-item>
                </md-list>                
                <button md-menu-item (click)="logout()" *ngIf="(authService.user | async)">
                    <button md-raised-button>Logout</button>
                </button>                
            </md-menu>
        </md-toolbar>
        <router-outlet></router-outlet>
    `
})

export class ToolbarComponent {

    private profile: string = "";
    private user: firebase.User;

    constructor(public authService: AuthService, private router: Router) {
        console.log("Hello from the toolbar component...");
        this.authService.user.subscribe((user) => {
            if (user == null) {

            }
            else {
                this.user = user;
                this.profile = user.displayName != null ? user.displayName : user.email != null ? user.email : "None";
                console.log(user);
            }
        });
    }

    googleLogin() {
        this.authService.loginWithGoogle().then((data) => {
            //console.log(data);
        })
    }

    githubLogin() {
        this.authService.loginWithGithub().then((data) => {
            //console.log(data.additionalUserInfo);
        })
    }

    twitterLogin() {
        this.authService.loginWithTwitter().then((data) => {
            //console.log(data.additionalUserInfo);
        })
    }

    logout() {
        this.authService.logout();
        console.log("signed out.");
    }
}
