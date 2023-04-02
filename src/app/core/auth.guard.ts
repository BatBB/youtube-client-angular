import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../auth/services/login.service';

export const authGuard = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  let isLogged = false;
  const sub: Subscription = loginService.isLoggedIn$.subscribe((isLog) => {
    isLogged = isLog;
  });
  sub.unsubscribe();

  if (isLogged) {
    return true;
  }

  return router.parseUrl('login');
};
