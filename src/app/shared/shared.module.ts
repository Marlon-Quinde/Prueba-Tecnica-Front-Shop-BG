import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// * Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OnlyNumbersValidationsDirective, ValidUsersValidationsDirective } from './directives/validations.directive';



@NgModule({
  declarations: [
    OnlyNumbersValidationsDirective,
    ValidUsersValidationsDirective
  ],
  exports: [
    // * Formularios Reactivos
    ReactiveFormsModule,

    // ? Directivas
    OnlyNumbersValidationsDirective,
    ValidUsersValidationsDirective,

    // ! Modulos de Material
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule


  ]
})
export class SharedModule { }
