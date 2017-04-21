import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DashboardComponentRss } from './dashboard-component-rss';
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';
import { FeedEnclosure } from '../model/feed-enclosure';

@Component({
    selector: 'dashboard',
    template: `
        <masonry style="margin: 0 auto;">
            <dashboard-component-outlet *ngFor="let info of componentInfos"
                [type]="info.type" 
                [title]="info.title" 
                [end_point]="info.end_point"
                [count]="info.count"
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
            type: DashboardComponentRss,
            title: 'Freakonomics',
            end_point: 'http://feeds2.feedburner.com/freakonomicsradio',
            count: 6
        },
        {
            type: DashboardComponentRss,
            title: 'Channel 9',
            end_point: 'https://channel9.msdn.com/all/rss',
            count: 8
        },
        {
            type: DashboardComponentRss,
            title: 'Ted Talks',
            end_point: 'https://www.ted.com/talks/rss',
            count: 10
        },
        {
            type: DashboardComponentRss,
            title: 'Adventures in Angular',
            end_point: 'https://feeds.feedwrench.com/AdventuresInAngular.rss',
            count: 10
        },
        {
            type: DashboardComponentRss,
            title: 'Scott Hanselman\'s blog',
            end_point: 'http://feeds.hanselman.com/scotthanselman',
            count: 4
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
