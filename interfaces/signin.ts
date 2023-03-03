export interface ISignin {
  email: string;
  password: string;
}

export interface ISigninErrors {
  email: string;
  password: string;
  request: string;
}

export interface IRawSignin {
  firstname: string;
  lastname: string;
  password: string;
}
