import {
    Component,
    ViewContainerRef,
    ComponentFactoryResolver,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    OnInit
} from '@angular/core';

import { DashboardComponent } from './dashboard-component';

@Component({
    selector: 'dashboard-component-outlet',
    template: ''
})

export class DashboardComponentOutlet implements DashboardComponent, OnChanges, OnInit {

    @Input() type;
    @Input() title: string;
    @Input() end_point: string;
    @Input() count: number;
    @Input() options: string;

    @Output() componentSelected = new EventEmitter();

    private dynamicInstance: DashboardComponent;

    constructor(private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver) {
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
