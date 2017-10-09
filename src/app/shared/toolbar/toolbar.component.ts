import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { MatMenuModule, MatMenu, MatMenuTrigger, MatMenuItem } from '@angular/material';

@Component({
    selector: 'toolbar',
    template: `
    <mat-toolbar style="background-color: black;">
        <span style="color: white;">
            <a href="\">
                <img 
                src="/assets/borntolearnwild.png" 
                style="margin-right: 10px; width:30px; height: 30px;" 
                title="Learn Wild | Not every site can become a great source of knowledge but a great source of knowledge can come from any site. Just keep learning.">
            </a>                
        </span>
        <span class="example-spacer" style="color: white; text-align:center; white-space:pre-wrap; font-size: 0.6em;">
            Learn Wild <font color="red" > | </font> Never Stop Learning. Ever.           
        </span>

        <button mat-icon-button [matMenuTriggerFor]="appMenu">
            <mat-icon style="color: white;" *ngIf="!(currentUser)">account_circle</mat-icon>
            <mat-icon style="color: white;" *ngIf="(currentUser)">face</mat-icon>
        </button>
        
        <mat-menu #appMenu="matMenu">
            <button mat-menu-item (click)="googleLogin()" *ngIf="!(currentUser)">
                <button mat-raised-button color="warn">Google</button>
            </button>
            <button mat-menu-item (click)="githubLogin()" *ngIf="!(currentUser)">
                <button mat-raised-button color="warn">GitHub</button>
            </button>
            <button mat-menu-item (click)="twitterLogin()" *ngIf="!(currentUser)">
                <button mat-raised-button color="warn">Twitter</button>
            </button>                
            <button mat-menu-item (click)="logout()" *ngIf="(currentUser)" title="{{currentUser.uid}} | {{currentUser.email}}">
                <button mat-raised-button>Logout</button>
            </button>
        </mat-menu>
    </mat-toolbar>
    <mat-toolbar style="background-color: black;">
        <span style="width: 100%"><app-single-media-player></app-single-media-player></span>        
    </mat-toolbar>
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