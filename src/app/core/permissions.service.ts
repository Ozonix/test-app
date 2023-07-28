import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '@core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  resolvePermissions(route: IRoute): boolean {
    const canRoute = this.authService.getPermissions([])
    console.log(route, canRoute)
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot): boolean {
    return this.resolvePermissions(route);
  }
}

export const AuthGuard: CanActivateChildFn = (next: ActivatedRouteSnapshot): boolean => {
  return inject(PermissionsService).canActivateChild(next);
}