import { EventEmitter } from '@angular/core';

export interface DashboardComponent {
    title: string;
    end_point: string;
    count: number;
    options: string;
    componentSelected: EventEmitter<any>;
}
