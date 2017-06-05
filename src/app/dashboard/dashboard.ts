import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';

import { EndPoint } from '../model/endpoint';
import { EndPointService } from '../shared/endpoint.service';

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
    `
})
// <div *ngIf="selectedComponent" class="col-sm-12">
//     <b>Selected: </b> {{ selectedComponent.title }} | {{ selectedComponent.end_point }} | {{ selectedComponent.count }}
// </div>

export class Dashboard implements AfterViewInit {
    @ViewChild(AngularMasonry) masonry: AngularMasonry;

    selectedComponent: Dashboard;
    componentInfos: EndPoint[] = [];

    options: MasonryOptions = {
        transitionDuration: '0.35',
        fitWidth: true,
        gutter: 5,
        percentPosition: true
    };

    constructor(endpointService: EndPointService){
        this.componentInfos = endpointService.endPoints;
    }

    ngAfterViewInit() {
        this.masonry.layoutComplete.subscribe(() => {
            //console.log('masonry layout complete.');
        });
    }

    selectComponent(selected: any) {
        this.selectedComponent = selected;
        console.log('Component Selection Event received by Dashboard: ' + selected.title + ' | ' + selected.end_point + ' | ' + selected.count);
    }
}
