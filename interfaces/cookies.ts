export interface ICookieOptions {
  httpOnly: boolean;
  path: string;
  expires: Date;
  sameSite?: true | false | 'lax' | 'strict' | 'none' | undefined;
  secure?: boolean | undefined;
  domain?: string | undefined;
}

export interface ICookieProp {
  isHttpOnly: boolean;
}
