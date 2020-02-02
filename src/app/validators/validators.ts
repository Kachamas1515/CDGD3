import { AbstractControl, ValidationErrors } from '@angular/forms';

export function ValidateName(
  control: AbstractControl
): ValidationErrors | null {
  if (/[0-9]/.test(control.value)) {
    return { haveNum: true };
  }
  return null;
}
