import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <toolbar></toolbar>
        <div style="margin-top:5px;">
            <dashboard></dashboard>
        </div>        
    `
})

export class AppComponent {    
    constructor() { 
    }
}