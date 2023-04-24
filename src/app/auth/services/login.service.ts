import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userName = '';

  isLoggedIn = this.initLogin();

  constructor(private router: Router) {}

  public login(loginData: string) {
    this.isLoggedIn = true;
    this.setToken(loginData);
    this.setUserName();
    this.router.navigate(['main']);
  }

  public logout() {
    this.deleteToken();
    this.isLoggedIn = false;
    this.userName = '';
    this.router.navigate(['login']);
  }

  private initLogin(): boolean {
    if (localStorage.getItem('token')) {
      this.setUserName();
      return true;
    }
    return false;
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
