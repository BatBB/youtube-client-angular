import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email: string = control.value;

    if (!email) return null;

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (emailRegex.test(email)) return null;

    return {
      invalid: true,
    };
  };
}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password: string = control.value;

    if (!password) return null;

    const hasDigit = /\d/.test(password);
    const hasUpperAndLowerCase = /(?=.*[A-Z])(?=.*[a-z])/.test(password);
    const hasSpecialCharacter =
      /(?=.*[~`!@#$%^&*()-+={}[\]|\\:;"'<>,.?/_])/.test(password);

    if (hasDigit && hasUpperAndLowerCase && hasSpecialCharacter) return null;

    return {
      digit: !hasDigit,
      case: !hasUpperAndLowerCase,
      character: !hasSpecialCharacter,
    };
  };
}
