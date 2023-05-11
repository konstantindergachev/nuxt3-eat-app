export interface IUpdateProfile {
  id?: number;
  fullname: string;
  email: string;
  location: string;
  image: string;
  imageId: string;
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export type TUpdateProfile = Pick<
  IUpdateProfile,
  'fullname' | 'email' | 'location' | 'image' | 'imageId'
>;

export interface IUpdateProfileErrors {
  fullname: string;
  email: string;
  location: string;
  image: string;
  imageId: string;
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
  img_id: string;
  customers: { firstname: string; lastname: string; email: string };
}
