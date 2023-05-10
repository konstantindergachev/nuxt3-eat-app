export interface IUpdateProfile {
  id?: number;
  fullname: string;
  email: string;
  location: string;
  image: string;
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export type TUpdateProfile = Pick<IUpdateProfile, 'fullname' | 'email' | 'location' | 'image'>;

export interface IUpdateProfileErrors {
  fullname: string;
  email: string;
  location: string;
  image: string;
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
  id: number;
  city: string;
  country: string;
  img: string;
  customers: { firstname: string; lastname: string; email: string };
}
