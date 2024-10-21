import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environments } from '../../../environments/env';
import { AuthSignInI, AuthSignUpI } from '../interfaces/auth.interface';
import { ResponseBack } from '../../../shared/interfaces/responseBack.interface';
import { LoginI } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl = Environments.baseUrl;

  constructor(private _http: HttpClient) { }

  signIn(payload: AuthSignInI){
    const url: string = `${this._baseUrl}/auth/sign-in`;
    return this._http.post<ResponseBack<LoginI | null>>(url, payload);
  }

  signUp(payload: AuthSignUpI){
    const url: string = `${this._baseUrl}/auth/sign-up`;
    return this._http.post<ResponseBack<LoginI | null>>(url, payload);
  }
}
