import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { EndPoint } from '../model/endpoint';
import { RssComponent } from '../dashboard/cards/rss/rss-component';
import { NytComponent } from '../dashboard/cards/nyt/nyt.component';
import { HotComponent } from '../dashboard/cards/hot/hot.component';
import { QuoteComponent } from '../dashboard/cards/quote/quote.component';

@Injectable()
export class EndPointService {

    endPoints: EndPoint[] = [];

    constructor(public af: AngularFireDatabase) {
        // this.items = af.list('/endpoints',
        //   query: {
        //     limitToLast: 50
        //   }
        // })

        this.endPoints = [
            {
                type: HotComponent,
                title: "Today's Articles",
                end_point: '',
                options: {
                    type: 'Article'
                },
                count: 0,
                active: true
            },
            {
                type: HotComponent,
                title: "Today's Podcasts",
                end_point: '',
                options: {
                    type: 'Podcast'
                },
                count: 0,
                active: true                
            },
            {
                type: QuoteComponent,
                title: "Today's Quotes",
                end_point: '',
                options: {},
                count: 0,
                active: true
            },
            {
                type: RssComponent,
                title: 'Freakonomics',
                end_point: 'http://feeds2.feedburner.com/freakonomicsradio',
                options: {},
                count: 6,
                active: true
            },
            {
                type: NytComponent,
                title: 'NYT - Top Stories',
                end_point: '',
                options: {
                    section: 'World'
                },
                count: 5,
                active: true                
            }
            , {
                type: NytComponent,
                title: 'NYT - Top Stories',
                end_point: '',
                options: {
                    section: 'Technology'
                },
                count: 7,
                active: true                
            }
            , {
                type: RssComponent,
                title: 'Ted Talks (Audio)',
                end_point: 'http://feeds2.feedburner.com/tedtalks_audio/',
                count: 5,
                options: '',
                active: true
            }
            , {
                type: RssComponent,
                title: 'Ted Talks (Video)',
                end_point: 'http://feeds2.feedburner.com/tedtalks_video/',
                count: 5,
                options: '',
                active: true
            }
            , {
                type: RssComponent,
                title: 'Adventures in Angular',
                end_point: 'https://feeds.feedwrench.com/AdventuresInAngular.rss',
                options: {},
                count: 10,
                active: true                
            }
            , {
                type: RssComponent,
                title: 'Javascript Jabber',
                end_point: 'https://feeds.feedwrench.com/JavascriptJabber.rss',
                options: {},
                count: 5,
                active: true                
            }
            , {
                type: RssComponent,
                title: 'Scott Hanselman\'s blog',
                end_point: 'http://feeds.hanselman.com/scotthanselman',
                options: {},
                count: 4,
                active: true                
            }
            , {
                type: RssComponent,
                title: 'The Minimalists',
                end_point: 'http://theminimalists.libsyn.com/rss',
                options: {},
                count: 5,
                active: true                
            }
            , {
                type: RssComponent,
                title: 'Hanselminutes',
                end_point: 'http://feeds.podtrac.com/9dPm65vdpLL1',
                options: {},
                count: 3,
                active: true                
            }
            , {
                type: RssComponent,
                title: 'This American Life',
                end_point: 'http://feed.thisamericanlife.org/talpodcast',
                options: {},
                count: 2,
                active: true                
            }
            , {
                type: RssComponent,
                title: 'Simple Talk',
                end_point: 'https://www.simple-talk.com/feed/',
                options: {},
                count: 5,
                active: true                
            }
            , {
                type: RssComponent,
                title: 'NPR - Planet Money Podcast',
                end_point: 'https://www.npr.org/rss/podcast.php?id=510289',
                options: {},
                count: 5,
                active: true                
            }
            , {
                type: RssComponent,
                title: 'Troy Hunt - Security Blog',
                end_point: 'https://feeds.feedburner.com/TroyHunt',
                options: {},
                count: 5,
                active: true                
            },
            {
                type: RssComponent,
                title: 'John Papa - Blog',
                end_point: 'https://johnpapa.net/rss/',
                options: {},
                count: 5,
                active: true
            },
            {
                type: RssComponent,
                title: 'TMSIDK',
                end_point: 'http://rss.art19.com/tell-me-something-i-don-t-know',
                options: {},
                count: 5,
                active: true                
            },
            {
                type: RssComponent,
                title: 'Malcom Gladwell - Revisionist History',
                end_point: 'http://feeds.feedburner.com/RevisionistHistory',
                options: {},
                count: 12,
                active: true                
            }
        ];
    }
}
