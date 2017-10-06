import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <toolbar></toolbar>
        <router-outlet></router-outlet> 
    `
})

export class AppComponent {
    constructor(){

    }
}