import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Nyt } from '../../../model/nyt';

@Injectable()
export class NytService {

  private nytBaseEndPoint: string = 'https://api.nytimes.com/svc/';

  private nytApiTopStories: any = {
    endpoint: 'topstories/v2/{options}.json',
    apikey: 'ddaa74ef8a3d2b23e69f612bbd6c0321:3:70269458'
  };

  constructor(private http: Http) {
  }

  getFeedContent(options: any): Observable<Nyt> {
    let parameters: URLSearchParams = new URLSearchParams();
    parameters.set('api-key', this.nytApiTopStories.apikey);
    let requestOptions = new RequestOptions();
    requestOptions.search = parameters;

    return this.http.get(this.nytBaseEndPoint + this.nytApiTopStories.endpoint.replace('{options}', options.section.toLowerCase()), requestOptions)
      .map(this.extractFeeds)
      .catch(this.handleError);
  }

  private extractFeeds(res: Response): Nyt {
    let feed = res.json();
    return feed || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errorMessage = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errorMessage); // log to console instead
    return Observable.throw(errorMessage);
  }
}
