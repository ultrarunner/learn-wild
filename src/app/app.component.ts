import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
    selector: 'app-root',
    template: `
        <toolbar></toolbar>
        <router-outlet></router-outlet>   
    `
})

export class AppComponent {    
    
    constructor(public authService: AuthService, private router: Router) {
        
    }
}