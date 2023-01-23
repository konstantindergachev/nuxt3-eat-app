export interface ISignin {
  email: string;
  password: string;
}

export interface ISigninErrors {
  email: string;
  password: string;
  request: string;
}
