import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';

import { RssComponent } from './cards/rss/rss-component';
import { FeedEnclosure } from '../model/feed';

import { NytComponent } from './cards/nyt/nyt.component';

@Component({
    selector: 'dashboard',
    template: `
        <masonry style="margin: 0 auto;">
            <dashboard-component-outlet *ngFor="let info of componentInfos"
                [type]="info.type" 
                [title]="info.title" 
                [end_point]="info.end_point"
                [count]="info.count"
                [options]="info.options"
                (componentSelected)="selectComponent($event)">
            </dashboard-component-outlet>
        </masonry>
        <div *ngIf="selectedComponent" class="col-sm-12">
            <b>Selected: </b> {{ selectedComponent.title }} | {{ selectedComponent.end_point }} | {{ selectedComponent.count }}
        </div>
    `
})

export class Dashboard implements AfterViewInit {
    @ViewChild(AngularMasonry) masonry: AngularMasonry;

    selectedComponent: Dashboard;

    options: MasonryOptions = {
        transitionDuration: '0.35',
        fitWidth: true,
        gutter: 5,
        percentPosition: true
    };

    private componentInfos = [
        {
            type: RssComponent,
            title: 'Freakonomics',
            end_point: 'http://feeds2.feedburner.com/freakonomicsradio',
            count: 6
        },
        {
            type: NytComponent,
            title: 'NYT - Top Stories',
            end_point: '',
            options: 'world',
            count: 5
        }, 
        {
            type: NytComponent,
            title: 'NYT - Top Stories',
            end_point: '',
            options: 'technology',
            count: 7
        },                       
        {
            type: RssComponent,
            title: 'Channel 9',
            end_point: 'https://channel9.msdn.com/all/rss',
            count: 8
        },
        {
            type: RssComponent,
            title: 'Ted Talks',
            end_point: 'https://www.ted.com/talks/rss',
            count: 10
        },
        {
            type: RssComponent,
            title: 'Adventures in Angular',
            end_point: 'https://feeds.feedwrench.com/AdventuresInAngular.rss',
            count: 10
        },
        {
            type: RssComponent,
            title: 'Scott Hanselman\'s blog',
            end_point: 'http://feeds.hanselman.com/scotthanselman',
            count: 4
        },
        {
            type: RssComponent,
            title: 'The Minimalists',
            end_point: 'http://theminimalists.libsyn.com/rss',
            count: 5
        }
    ];

    ngAfterViewInit() {
        this.masonry.layoutComplete.subscribe(() => {
            //console.log('masonry layout complete.');
        });
    }

    selectComponent(selected: any) {
        //console.log('Component Selection Event received by Dashboard: ' + selected.end_point);
        this.selectedComponent = selected;
    }
}
