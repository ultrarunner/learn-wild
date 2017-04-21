import { EventEmitter } from '@angular/core';
import { FeedEnclosure } from '../model/feed-enclosure';

export interface DashboardComponent {
    title: string;
    end_point: string;
    count: number;
    componentSelected: EventEmitter<any>;
}
