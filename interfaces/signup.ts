export interface ISignup {
  fullname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface ISignupErrors {
  fullname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  request: string;
}
