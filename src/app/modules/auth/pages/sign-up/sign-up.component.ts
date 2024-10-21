import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../../../shared/services/shared.service';
import { AuthSignUpFormI, AuthSignUpI } from '../../interfaces/auth.interface';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  public signUpForm: FormGroup;
  public hide = signal(true);

  constructor(
    private _fb: FormBuilder,
    private _sharedService: SharedService,
    private _toast: ToastrService,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.signUpForm = this.createSignUpForm();
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  createSignUpForm() {
    return this._fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]],
    });
  }
  getErrors(nombreControl: string) {
    return this._sharedService.getErrors(nombreControl, this.signUpForm);
  }

  singUp() {
    if (this.signUpForm.invalid) {
      this._toast.error('El formulario no es válido', 'Error');
      return
    }
    const {repeatPassword, ...rest}: AuthSignUpFormI = this.signUpForm.value;
    if(repeatPassword !== rest.password){
      this._toast.error('Las contraseñas deben ser iguales', 'Error');
      return
    }
    this._authService.signUp(rest).subscribe({
      next:(res) => {
        this._toast.success(res.message, 'Exito')
        this._router.navigateByUrl('/auth/sign-in');
      },
      error:(res) => {
        this._toast.error(res.error.message, 'Fallo')
      },
    })
  }
}
