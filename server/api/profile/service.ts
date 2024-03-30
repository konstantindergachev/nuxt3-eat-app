import crypto from 'crypto';
import { db } from '~~/server/db/clientDB';
import {
  IReceiveProfileFromDB,
  IUpdateProfile,
  IUpdateProfileDBResponse,
} from '~~/interfaces/profile';
import { NOT_PROFILE_ADD_DATA } from '~~/stub/constants';
import { PostgrestResponseSuccess } from '@supabase/postgrest-js';

const { CUSTOMER_PASSWORD_SECRET } = process.env;

export const createProfileService = async (
  profile: IUpdateProfile,
  customerId: number
): Promise<IUpdateProfileDBResponse> => {
  const profilePromise = createProfile(customerId, profile);
  const customerPromise = updateCustomer(customerId, profile);

  const [profileResponse, customerResponse] = await Promise.all([profilePromise, customerPromise]);

  return { profileResponse, customerResponse };
};

const createProfile = async (
  customerId: number,
  profile: IUpdateProfile
): Promise<{ status: number; statusText: string }> => {
  const [city, country] = profile.location.split(',');
  const dbResponse = await db.from('profiles').insert([
    {
      customer_id: customerId,
      city: city.trim(),
      country: country.trim(),
      img: profile.image,
      img_id: profile.imageId,
    },
  ]);

  return { status: dbResponse.status, statusText: dbResponse.statusText };
};

const updateCustomer = async (
  customerId: number,
  profile: IUpdateProfile
): Promise<{ status: number; statusText: string }> => {
  const [firstname, lastname] = profile.fullname.split(' ');
  const hashedNewPassword = getHashedPassword(profile.newPassword);
  const hashedNewPasswordConfirm = getHashedPassword(profile.newPasswordConfirm);
  const customer = {
    firstname: firstname.trim(),
    lastname: lastname.trim(),
    email: profile.email,
    password: hashedNewPassword,
    password_confirm: hashedNewPasswordConfirm,
    updated_at: new Date(),
  };
  const dbResponse = await db
    .from('customers')
    .update({ ...customer })
    .eq('id', customerId);
  return { status: dbResponse.status, statusText: dbResponse.statusText };
};

export const receiveProfileService = async (customerId: number): Promise<IReceiveProfileFromDB> => {
  const { data } = (await db
    .from('profiles')
    .select('id, city, country, img, img_id, customers(firstname, lastname, email)')
    .eq('customer_id', customerId)
    .single()) as PostgrestResponseSuccess<IReceiveProfileFromDB>;

  if (!data) {
    throw new Error(NOT_PROFILE_ADD_DATA);
  }
  return data;
};

const getHashedPassword = (password: string): string => {
  return crypto.createHmac('sha256', CUSTOMER_PASSWORD_SECRET!).update(password).digest('hex');
};

export const updateProfileService = async (
  customerId: number,
  profile: IUpdateProfile
): Promise<IUpdateProfileDBResponse> => {
  const customerPromise = updateCustomer(customerId, profile);
  const profilePromise = updateProfile(customerId, profile);
  const [profileResponse, customerResponse] = await Promise.all([profilePromise, customerPromise]);
  return { profileResponse, customerResponse };
};

const updateProfile = async (customerId: number, profile: IUpdateProfile) => {
  const [city, country] = profile.location.split(',');
  const dbResponse = await db
    .from('profiles')
    .update({
      customer_id: customerId,
      city,
      country,
      img: profile.image,
      img_id: profile.imageId,
    })
    .eq('id', profile.id);
  return { status: dbResponse.status, statusText: dbResponse.statusText };
};
