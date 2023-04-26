import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
import { LoginData } from '../models/login-data';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userName = '';

  isLoggedIn = this.initLogin();

  // private isLoggedIn$$ = new BehaviorSubject<boolean>(false);

  // // eslint-disable-next-line @typescript-eslint/member-ordering
  // public isLoggedIn$ = this.isLoggedIn$$.asObservable();

  constructor(private router: Router) {}

  public login(loginData: LoginData) {
    this.setToken(loginData);
    this.setUserName(loginData.login);
    this.isLoggedIn = true;
    this.router.navigate(['main']);
  }

  public logout() {
    this.deleteToken();
    this.userName = '';
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }

  private initLogin(): boolean {
    if (localStorage.getItem('token')) {
      this.setUserName();
      return true;
    }
    return false;
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
}
