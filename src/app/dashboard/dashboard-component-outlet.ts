import {
    Component,
    ViewContainerRef,
    ComponentFactoryResolver,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    OnInit,
    ViewChild,
    ElementRef
} from '@angular/core';

import { DashboardComponent } from './dashboard-component';

@Component({
    selector: 'dashboard-component-outlet',
    template: '<div #itemContainer class="masonry-item"></div>',
    styles: [`
        :host {
            display: block;
            width: 422px;
            margin: 5px;
        }
        .masonry-item {
            width: 100%;
            height: 100%;
        }
    `]
})

export class DashboardComponentOutlet implements DashboardComponent, OnChanges, OnInit {

    @Input() type;
    @Input() title: string;
    @Input() end_point: string;
    @Input() count: number;
    @Input() options: string;

    @Output() componentSelected = new EventEmitter();

    @ViewChild('itemContainer', { read: ViewContainerRef }) viewContainer: ViewContainerRef;

    private dynamicInstance: DashboardComponent;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
    }

    ngOnChanges(changes) {

        if (changes.type) {
            this.viewContainer.clear();

            // Create Component
            const factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
            const componentRef = this.viewContainer.createComponent(factory);
            this.dynamicInstance = componentRef.instance as DashboardComponent;

            // Set up Event-Handlers and delegate to own handlers
            this.dynamicInstance.componentSelected.subscribe(e => this.componentSelected.emit(e));
        }

        // Delegate Properties
        if (changes.title) {
            this.dynamicInstance.title = this.title;
            this.dynamicInstance.end_point = this.end_point;
            this.dynamicInstance.count = this.count;
            this.dynamicInstance.options = this.options;
        }
    }
}
