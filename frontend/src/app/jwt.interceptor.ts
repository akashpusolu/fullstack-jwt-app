import { HttpInterceptor } from '@angular/common/http';
export class JwtInterceptor implements HttpInterceptor {
  intercept(req, next) {
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }
    return next.handle(req);
  }
}