import { Component } from '@angular/core';
import { Router } from '@angular/router';

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