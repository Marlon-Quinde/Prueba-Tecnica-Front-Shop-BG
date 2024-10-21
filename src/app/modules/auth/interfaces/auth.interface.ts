export interface AuthSignInI {
  email: string;
  password: string;
}


export interface AuthSignUpI {
  nombre: string;
  email: string;
  password: string;
}

export interface AuthSignUpFormI  extends AuthSignUpI{
  repeatPassword: string;
}
