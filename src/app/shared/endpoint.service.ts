import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { EndPoint, UserEndPoint } from '../model/endpoint';
import { RssComponent } from '../dashboard/cards/rss/rss-component';
import { NytComponent } from '../dashboard/cards/nyt/nyt.component';
import { HotComponent } from '../dashboard/cards/hot/hot.component';
import { QuoteComponent } from '../dashboard/cards/quote/quote.component';

@Injectable()
export class EndPointService {

    endPoints: EndPoint[] = [];
    userEndPoints: UserEndPoint[] = [];

    getUserEndPoints(user: any): EndPoint[] {
        var ep: EndPoint[] = [];
        if (user == null) {
            return this.endPoints;
        }
        else {
            // begin - for now - apply all end points to all users
            this.userEndPoints = this.endPoints.map((val) => {
                return {
                    user_id: user.uid, //"sW1sbYPUpNeOYrpOjFB0HIGKll52",
                    end_point_id: val.end_point_id,
                    active: val.active
                }
            });
            // end - for now - apply all end points to all users
            var uep = this.userEndPoints.filter((item, index) => {
                return item.active === true && item.user_id === user.uid;
            });
            for (var i = 0; i < uep.length; i++) {
                var endPoint = this.endPoints.filter((item, index) => {
                    return (item.active === true && item.end_point_id === uep[i].end_point_id);
                })[0];
                console.log(endPoint);                
                if (endPoint != null) 
                {
                    console.log(endPoint);
                    ep.push(endPoint);
                }
            }
        }
        return ep;
    }

    constructor(public af: AngularFireDatabase) {
        // this.items = af.list('/endpoints',
        //   query: {
        //     limitToLast: 50
        //   }
        // })

        this.endPoints = [
            {
                end_point_id: 1,
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
                end_point_id: 2,
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
                end_point_id: 3,
                type: QuoteComponent,
                title: "Today's Quotes",
                end_point: '',
                options: {},
                count: 1,
                active: true
            },
            {
                end_point_id: 4,
                type: RssComponent,
                title: 'Freakonomics',
                end_point: 'http://feeds2.feedburner.com/freakonomicsradio',
                options: {},
                count: 6,
                active: true
            },
            {
                end_point_id: 5,
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
                end_point_id: 6,
                type: NytComponent,
                title: 'NYT - Top Stories',
                end_point: '',
                options: {
                    section: 'Technology'
                },
                count: 7,
                active: false
            }
            , {
                end_point_id: 7,
                type: RssComponent,
                title: 'Ted Talks (Audio)',
                end_point: 'http://feeds2.feedburner.com/tedtalks_audio/',
                count: 5,
                options: '',
                active: false
            }
            , {
                end_point_id: 8,
                type: RssComponent,
                title: 'Ted Talks (Video)',
                end_point: 'http://feeds2.feedburner.com/tedtalks_video/',
                count: 5,
                options: '',
                active: false
            }
            , {
                end_point_id: 9,
                type: RssComponent,
                title: 'Adventures in Angular',
                end_point: 'https://feeds.feedwrench.com/AdventuresInAngular.rss',
                options: {},
                count: 10,
                active: false
            }
            , {
                end_point_id: 10,
                type: RssComponent,
                title: 'Javascript Jabber',
                end_point: 'https://feeds.feedwrench.com/JavascriptJabber.rss',
                options: {},
                count: 5,
                active: false
            }
            , {
                end_point_id: 11,
                type: RssComponent,
                title: 'Scott Hanselman\'s blog',
                end_point: 'http://feeds.hanselman.com/scotthanselman',
                options: {},
                count: 4,
                active: false
            }
            , {
                end_point_id: 12,
                type: RssComponent,
                title: 'The Minimalists',
                end_point: 'http://theminimalists.libsyn.com/rss',
                options: {},
                count: 5,
                active: false
            }
            , {
                end_point_id: 13,
                type: RssComponent,
                title: 'Hanselminutes',
                end_point: 'http://feeds.podtrac.com/9dPm65vdpLL1',
                options: {},
                count: 3,
                active: false
            }
            , {
                end_point_id: 14,
                type: RssComponent,
                title: 'This American Life',
                end_point: 'http://feed.thisamericanlife.org/talpodcast',
                options: {},
                count: 2,
                active: false
            }
            , {
                end_point_id: 15,
                type: RssComponent,
                title: 'Simple Talk',
                end_point: 'https://www.simple-talk.com/feed/',
                options: {},
                count: 5,
                active: false
            }
            , {
                end_point_id: 16,
                type: RssComponent,
                title: 'NPR - Planet Money Podcast',
                end_point: 'https://www.npr.org/rss/podcast.php?id=510289',
                options: {},
                count: 5,
                active: false
            }
            , {
                end_point_id: 17,
                type: RssComponent,
                title: 'Troy Hunt - Security Blog',
                end_point: 'https://feeds.feedburner.com/TroyHunt',
                options: {},
                count: 5,
                active: false
            },
            {
                end_point_id: 18,
                type: RssComponent,
                title: 'John Papa - Blog',
                end_point: 'https://johnpapa.net/rss/',
                options: {},
                count: 5,
                active: false
            },
            {
                end_point_id: 19,
                type: RssComponent,
                title: 'TMSIDK',
                end_point: 'http://rss.art19.com/tell-me-something-i-don-t-know',
                options: {},
                count: 5,
                active: false
            },
            {
                end_point_id: 20,
                type: RssComponent,
                title: 'Malcom Gladwell - Revisionist History',
                end_point: 'http://feeds.feedburner.com/RevisionistHistory',
                options: {},
                count: 12,
                active: false
            },
            {
                end_point_id: 21,
                type: RssComponent,
                title: 'Sam Harris - Waking up',
                end_point: 'http://wakingup.libsyn.com/rss',
                options: {},
                count: 4,
                active: false
            }
        ];
    }
}
