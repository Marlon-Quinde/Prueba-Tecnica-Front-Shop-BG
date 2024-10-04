import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // * Expresiones Regulares

  public onlyNumber = /^[0-9]+$/;
  public validUser = /^[0-9-A-Za-z@.-_]+$/;


  constructor() { }

  // getErrors(controlName: stirng){

  // }

}
