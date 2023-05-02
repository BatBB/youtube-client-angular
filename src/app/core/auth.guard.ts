import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { LoginService } from '../auth/services/login.service';

export const authGuard = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  let isLoggedIn = false;

  loginService.isLoggedIn$.pipe(take(1)).subscribe((status) => {
    isLoggedIn = status;
  });

  if (isLoggedIn) {
    return true;
  }
  return router.parseUrl('login');
};
