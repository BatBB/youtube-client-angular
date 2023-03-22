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

  onSubmit() {
    this.setToken();
    this.router.navigate(['main']);
  }

  setToken() {
    if (!this.formGroup.value.login) return;
    localStorage.setItem('token', JSON.stringify(this.formGroup.value));
  }

  constructor(private router: Router) {}
}
