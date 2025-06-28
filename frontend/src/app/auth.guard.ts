import { CanActivate } from '@angular/router';
export class AuthGuard implements CanActivate {
  canActivate() { return !!localStorage.getItem('token'); }
}