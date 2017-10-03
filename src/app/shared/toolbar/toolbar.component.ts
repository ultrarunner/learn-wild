import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
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
            <button md-menu-item (click)="googleLogin()" *ngIf="!(currentUser)">
                <button md-raised-button color="warn">Google</button>
            </button>
            <button md-menu-item (click)="githubLogin()" *ngIf="!(currentUser)">
                <button md-raised-button color="warn">GitHub</button>
            </button>
            <button md-menu-item (click)="twitterLogin()" *ngIf="!(currentUser)">
                <button md-raised-button color="warn">Twitter</button>
            </button>                
            <button md-menu-item (click)="logout()" *ngIf="(currentUser)" title="{{currentUser.uid}} | {{currentUser.email}}">
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
    currentUser: firebase.User;

    constructor(public authService: AuthService, private _router: Router) {
        authService.authenticated$.subscribe(authUser => {
            if (authUser) {
                authService.user$.subscribe(user => {
                    this.currentUser = user;
                    this._router.navigate(['/protected']);
                });
            } else {
                console.log("user: NONE");
                this.currentUser = null;
                this._router.navigate(['/']);
            }
        });
    }

    googleLogin(): void {
        this.authService.signInWithGoogle().then(() => {
            console.log("redirecting to protected route from GOOGLE...");
            this.postSignIn();
        })
    }

    githubLogin(): void {
        this.authService.signInWithGithub().then(() => {
            console.log("redirecting to protected route from GITHUB...");
            this.postSignIn();
        })
    }

    twitterLogin(): void {
        this.authService.signInWithTwitter().then(() => {
            console.log("redirecting to protected route from TWITTER...");
            this.postSignIn();
        })
    }

    logout(): void {
        this.authService.signOut();
        this.postSignOut();
    }

    postSignIn(): void {
        this._router.navigate(['protected']);
    }

    postSignOut(): void {
        this._router.navigate(['/']);
    }
}