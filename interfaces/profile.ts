export interface IUpdateProfile {
  fullname: string;
  email: string;
  location: string;
  oldPassword: string;
  newPassword: string;
}

export type TUpdateProfile = Pick<IUpdateProfile, 'fullname' | 'email' | 'location'>;

export interface IUpdateProfileErrors {
  fullname: string;
  email: string;
  location: string;
  oldPassword: string;
  newPassword: string;
  request: string;
}
