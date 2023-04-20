import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userName = 'Your Name';

  isLoggedIn = false;

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
    this.userName = 'Your Name';
    this.router.navigate(['login']);
  }

  public checkLogin() {
    if (localStorage.getItem('token')) {
      this.isLoggedIn = true;
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
