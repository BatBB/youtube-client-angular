import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userName = 'Your Name';

  private isLoggedIn$$ = new BehaviorSubject<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public isLoggedIn$ = this.isLoggedIn$$.asObservable();

  constructor(private router: Router) {}

  public login(loginData: string) {
    this.isLoggedIn$$.next(true);
    this.setToken(loginData);
    this.setUserName();
    this.router.navigate(['main']);
  }

  public logout() {
    this.deleteToken();
    this.isLoggedIn$$.next(false);
    this.userName = '';
    this.router.navigate(['login']);
  }

  public checkLogin() {
    if (localStorage.getItem('token')) {
      this.isLoggedIn$$.next(true);
      this.setUserName();
    }
  }

  private setUserName() {
    const loginData = localStorage.getItem('token');
    if (loginData) this.userName = JSON.parse(loginData).login;
  }

  // eslint-disable-next-line class-methods-use-this
  private setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  // eslint-disable-next-line class-methods-use-this
  private deleteToken() {
    localStorage.removeItem('token');
  }
}
