import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  authService = inject(AuthService);
  router = inject(Router);

  canActivate(): boolean {
    let isAuth = false;
    this.authService.getAuthStatus().subscribe((authStatus) => {
      isAuth = authStatus;
    });
    if (!isAuth) {
      this.router.navigate(['/login']);
    }
    return isAuth;
  }
}
