import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";



@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isAuthenticated().then(
            (authenticated: boolean) => {
                if (authenticated) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                    return false;  // Ensures route blocking when not authenticated
                }
            }
        );
    }

}

// import { inject } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { AuthService } from './auth.service';

// export const AuthGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): boolean | UrlTree | Promise<boolean | UrlTree> => {
//   const authService = inject(AuthService);
//   const router = inject(Router);

//   return new Promise<boolean | UrlTree>((resolve) => {
//     const timeout = setTimeout(() => {
//       resolve(router.createUrlTree(['/'])); // Redirect if it takes too long
//     }, 1000);  // 1000ms timeout fallback

//     authService.isAuthenticated().then((authenticated: boolean) => {
//       clearTimeout(timeout);  // Clear the timeout if the promise resolves in time
//       if (authenticated) {
//         resolve(true);
//       } else {
//         resolve(router.createUrlTree(['/']));
//       }
//     }).catch(() => {
//       resolve(router.createUrlTree(['/']));  // Handle errors
//     });
//   });
// };
