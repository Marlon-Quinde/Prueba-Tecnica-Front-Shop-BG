import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthSignInI } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  public signInForm: FormGroup;
  public hide = signal(true);
  constructor(
    private fb: FormBuilder,
    private _route: Router,
    private _authService: AuthService,
    private _toastr: ToastrService,
    private _sharedService: SharedService
  ) {
    this.signInForm = this.createSignForm();
  }

  createSignForm() {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }



  signIn() {
    if (this.signInForm.valid) {
      const form: AuthSignInI = this.signInForm.value;
      this._authService.signIn(form).subscribe({
        next:(res) => {
          this._toastr.success(res.message, 'Exito')
          localStorage.setItem('loginUser', JSON.stringify(res.data));
          this._route.navigateByUrl('/admin/productos/listado');
        },
        error:(res) => {
          this._toastr.error(res.error.message, 'Fallo')
        },

      })

    }
  }

  getErrors(nombreControl: string){
    return this._sharedService.getErrors(nombreControl, this.signInForm);
  }
}
