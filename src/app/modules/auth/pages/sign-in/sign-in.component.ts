import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  public signInForm: FormGroup

  constructor(private fb:FormBuilder, private _route: Router){
    this.signInForm = this.createSignForm()
  }

  createSignForm(){
    return this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  getErrors(nameControl: string): string | undefined{
    const control = this.signInForm.get(nameControl)?.errors

    if(!control) return;

    for (const error in control) {
      switch (error) {
        case 'required':
          return 'El campo es requerido';
        default:
          return 'Error ?';
      }
    }

    return ;
  }

  signIn(){
      if(this.signInForm.valid){
        const usuario = this.signInForm.value
        localStorage.setItem('loginUser', JSON.stringify(usuario));
        this._route.navigateByUrl('/admin/productos/listado')
      }
  }
}
