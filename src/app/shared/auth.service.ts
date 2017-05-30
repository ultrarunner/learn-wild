import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class AuthService {
  user: Observable<firebase.User> = Observable.empty();

  constructor(public angularFireAuth: AngularFireAuth, public angularFireDatabase: AngularFireDatabase) {
    console.log(this.angularFireAuth.authState);
    this.user = this.angularFireAuth.authState;
  }

  loginWithGoogle() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithGithub() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  loginWithTwitter() {
    return this.angularFireAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  logout() {
    return this.angularFireAuth.auth.signOut();
  }
}