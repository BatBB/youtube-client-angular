import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  formGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  userName = 'Your Name';

  isLoggedIn = false;

  constructor(private router: Router) {}

  public login() {
    if (!this.formGroup.value.login || !this.formGroup.value.password) {
      return;
    }
    this.isLoggedIn = true;
    this.setToken();
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

  private setToken() {
    localStorage.setItem('token', JSON.stringify(this.formGroup.value));
  }

  // eslint-disable-next-line class-methods-use-this
  private deleteToken() {
    localStorage.removeItem('token');
  }
}
