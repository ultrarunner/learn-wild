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
                    alt="Learn Wild | Not every site can become a great source of knowledge; but a great source of knowledge can come from any site.">
                </a>                
            </span>
            <span class="example-spacer"></span>
            <span style="width: 100%"><app-single-media-player></app-single-media-player></span>

            <button md-icon-button [mdMenuTriggerFor]="menu">
                <md-icon style="color: white;" *ngIf="!(currentUser)">account_circle</md-icon>
                <md-icon style="color: white;" *ngIf="(currentUser)">face</md-icon>
            </button>
            
            <md-menu #menu="mdMenu">
                <button md-menu-item (click)="googleLogin()" *ngIf="!(currentUser)">
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
    `
})

export class ToolbarComponent {

    currentUser$: FirebaseObjectObservable<firebase.User>;
    currentUser: firebase.User;

    constructor(public authService: AuthService, private router: Router) {
        authService.authState$.subscribe(authUser => {
            if (authUser != null) {
                console.log("user: " + authUser.email);
                this.currentUser = authUser;
            } else {
                console.log("user: NONE");
                this.currentUser = null;
            }
        });
    }

    googleLogin(): void {
        this.authService.signInWithGoogle().then(() => {
            console.log("redirecting to protected route from GOOGLE...");
            //this.postSignIn();
        })
    }

    githubLogin(): void {
        this.authService.signInWithGithub().then(() => {
            console.log("redirecting to protected route from GITHUB...");
            //this.postSignIn();            
        })
    }

    twitterLogin(): void {
        this.authService.signInWithTwitter().then(() => {
            console.log("redirecting to protected route from TWITTER...");
            //this.postSignIn();            
        })
    }

    logout(): void {
        console.log("signed out. redirecting to home page.");
        this.authService.signOut();
        //this.router.navigate[''];
    }

    postSignIn(): void {
        this.router.navigate["/protected"];
    }
}
