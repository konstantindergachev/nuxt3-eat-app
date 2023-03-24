export interface ICookieOptions {
  httpOnly: boolean;
  path: string;
  expires: Date;
}

export interface ICookieProp {
  isHttpOnly: boolean;
}
