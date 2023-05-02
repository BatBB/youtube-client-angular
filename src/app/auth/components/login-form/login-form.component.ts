import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormType } from 'src/app/shared/models/form-type';
import {
  emailValidator,
  passwordValidator,
} from 'src/app/shared/services/validators';
import { LoginData } from '../../models/login-data';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  formGroup!: FormGroup<FormType<LoginData>>;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, emailValidator()],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(8),
          passwordValidator(),
        ],
      }),
    });
  }

  submitLogin() {
    this.loginService.login(this.formGroup.getRawValue());
  }
}
