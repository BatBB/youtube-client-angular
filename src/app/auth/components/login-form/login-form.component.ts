import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormType } from 'src/app/shared/models/form-type';
import { LoginService } from '../../services/login.service';
import { LoginData } from '../../models/login-data';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  formGroup = new FormGroup<FormType<LoginData>>({
    login: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  submitLogin() {
    this.loginService.login(this.formGroup.getRawValue());
  }

  constructor(public loginService: LoginService) {}
}
