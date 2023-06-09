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
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
