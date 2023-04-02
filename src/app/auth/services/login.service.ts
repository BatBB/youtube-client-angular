import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  formGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  userName = '';

  private isLoggedIn$$ = new BehaviorSubject<boolean>(false);

  public isLoggedIn$ = this.isLoggedIn$$.asObservable();

  public login() {
    if (!this.formGroup.value.login || !this.formGroup.value.password) {
      return;
    }
    this.isLoggedIn$$.next(true);
    this.setToken();
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

  private setToken() {
    localStorage.setItem('token', JSON.stringify(this.formGroup.value));
  }

  // eslint-disable-next-line class-methods-use-this
  private deleteToken() {
    localStorage.removeItem('token');
  }

  constructor(private router: Router) {}
}
