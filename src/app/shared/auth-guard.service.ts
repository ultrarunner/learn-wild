import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(): Observable<boolean> {
        return this.authService.authenticated$
            .take(1)
            .map(authState => !!authState)
            .do(authenticated => {
                console.log("authenticated? " + authenticated);
                if (!authenticated) {
                    console.log("navigating back to login...");
                    this.router.navigate(['/login']);
                }
            });
    }
}