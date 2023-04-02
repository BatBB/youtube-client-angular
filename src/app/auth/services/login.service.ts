import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginData } from '../models/login-data';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userName = '';

  private isLoggedIn$$ = new BehaviorSubject<boolean>(false);

  public isLoggedIn$ = this.isLoggedIn$$.asObservable();

  public login(loginData: LoginData) {
    this.isLoggedIn$$.next(true);
    this.setToken(loginData);
    this.setUserName(loginData.login);
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

  private setUserName(login?: string) {
    if (login) this.userName = login;
    const loginData = localStorage.getItem('token');
    if (loginData) this.userName = (<LoginData>JSON.parse(loginData)).login;
  }

  // eslint-disable-next-line class-methods-use-this
  private setToken(loginData: LoginData) {
    localStorage.setItem('token', JSON.stringify(loginData));
  }

  // eslint-disable-next-line class-methods-use-this
  private deleteToken() {
    localStorage.removeItem('token');
  }

  constructor(private router: Router) {}
}
