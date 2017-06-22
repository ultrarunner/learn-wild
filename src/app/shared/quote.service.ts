import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Quote } from '../model/quote';

@Injectable()
export class QuoteService {

  constructor(public af: AngularFireDatabase) {
  }

  getContent(): FirebaseListObservable<Quote[]> {
    return this.af.list('/quotes');
  }
}
