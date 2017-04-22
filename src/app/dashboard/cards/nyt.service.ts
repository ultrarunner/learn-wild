import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NytService {

  private nytApiArticles: any = {
    endpoint: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    apikey: 'ddaa74ef8a3d2b23e69f612bbd6c0321:3:70269458'
  };

  constructor(
    private http: Http
  ) {
    const nytApiArticlesUrl = this.nytApiArticles.enpoint + this.nytApiArticles.apikey;
  }

  // getFeedContent(url: string): Observable<Feed> {
  //   return this.http.get(this.nytApiArticles + url)
  //     .map(this.extractFeeds)
  //     .catch(this.handleError);
  // }

  // private extractFeeds(res: Response): Feed {
  //   let feed = res.json();
  //   return feed || {};
  // }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errorMessage = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errorMessage); // log to console instead
    return Observable.throw(errorMessage);
  }
}
