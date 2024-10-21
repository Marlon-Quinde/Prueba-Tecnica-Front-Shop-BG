import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // * Expresiones Regulares

  public onlyNumber = /^[0-9]+$/;
  public validUser = /^[0-9-A-Za-z@.-_]+$/;


  constructor() { }

  getErrors(nameControl: string, formGroup: FormGroup): string | undefined {
    const control = formGroup.get(nameControl)?.errors;

    if (!control) return;

    for (const error in control) {
      switch (error) {
        case 'required':
          return 'El campo es requerido';
        case 'email':
          return 'Formato de correo no valido';
        default:
          return `Error ? ${error}`;
      }
    }

    return;
  }

}
