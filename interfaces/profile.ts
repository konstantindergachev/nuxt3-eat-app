export interface IUpdateProfile {
  fullname: string;
  email: string;
  location: string;
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export type TUpdateProfile = Pick<IUpdateProfile, 'fullname' | 'email' | 'location'>;

export interface IUpdateProfileErrors {
  fullname: string;
  email: string;
  location: string;
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
  request: string;
}

export interface IUpdateProfileDBResponse {
  profileResponse: { status: number; statusText: string };
  customerResponse: { status: number; statusText: string };
}

export interface IReceiveProfileFromDB {
  city: string;
  country: string;
  customers: { firstname: string; lastname: string; email: string };
}
