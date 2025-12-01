import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { EndPoint, UserEndPoint } from '../model/endpoint';
import { EndPointService } from '../shared/endpoint.service';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'dashboard',
    template: `
        <div style="width: 100%; position: relative;">
            <masonry [options]="options" (layoutComplete)="onLayoutComplete()">
                <dashboard-component-outlet masonry-brick *ngFor="let info of componentInfos"
                    [type]="info.type" 
                    [title]="info.title" 
                    [end_point]="info.end_point"
                    [count]="info.count"
                    [options]="info.options"
                    (componentSelected)="selectComponent($event)">
                </dashboard-component-outlet>
            </masonry>
        </div>
    `
})
// <div *ngIf="selectedComponent" class="col-sm-12">
//     <b>Selected: </b> {{ selectedComponent.title }} | {{ selectedComponent.end_point }} | {{ selectedComponent.count }}
// </div>

export class Dashboard implements AfterViewInit {
    @ViewChild(AngularMasonry) masonry: AngularMasonry;

    selectedComponent: Dashboard;
    componentInfos: EndPoint[] = [];
    userEndPoints: UserEndPoint[] = [];

    options: MasonryOptions = {
        transitionDuration: '0.35s',
        gutter: 10
    };

    constructor(public authService: AuthService, public endpointService: EndPointService) {
        authService.authenticated$.subscribe(authUser => {
            if (authUser) {
                authService.user$.subscribe(user => {
                    if (user != null) {
                        this.componentInfos = endpointService.getUserEndPoints(user.uid);
                    }
                    else {
                        this.componentInfos = endpointService.endPoints.filter((item, index) => {
                            return item.active === true;
                        });
                    }                    
                });
            } else {
                this.componentInfos = endpointService.endPoints.filter((item, index) => {
                    return item.active === true;
                });
            }
        });
    }

    ngAfterViewInit() {
        if (this.masonry) {
            this.masonry.layoutComplete.subscribe(() => {
                //console.log('masonry layout complete.');
            });
        }
    }

    onLayoutComplete() {
        // Masonry layout is complete
        //console.log('masonry layout complete.');
    }

    selectComponent(selected: any) {
        this.selectedComponent = selected;
        console.log('Component Selection Event received by Dashboard: ' + selected.title + ' | ' + selected.end_point + ' | ' + selected.count);
    }
}
