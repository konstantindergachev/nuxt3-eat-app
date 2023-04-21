import crypto from 'crypto';
import { db } from '@/server/db/clientDB';
import {
  IReceiveProfileFromDB,
  IUpdateProfile,
  IUpdateProfileDBResponse,
} from '@/interfaces/profile';

const { CUSTOMER_PASSWORD_SECRET } = process.env;

export const createProfileService = async (
  profile: IUpdateProfile,
  customerId: number
): Promise<IUpdateProfileDBResponse> => {
  const profilePromise = createProfile(customerId, profile.location);
  const customerPromise = updateCustomer(customerId, profile);

  const [profileResponse, customerResponse] = await Promise.all([profilePromise, customerPromise]);

  return { profileResponse, customerResponse };
};

const createProfile = async (
  customerId: number,
  location: string
): Promise<{ status: number; statusText: string }> => {
  const [city, country] = location.split(',');
  const dbResponse = await db.from('profiles').insert([
    {
      customer_id: customerId,
      city: city.trim(),
      country: country.trim(),
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

export const receiveProfileService = async (
  customerId: number
): Promise<IReceiveProfileFromDB | string> => {
  const { data } = await db
    .from('profiles')
    .select('city, country, customers(firstname, lastname, email)')
    .eq('customer_id', customerId)
    .single();

  if (!data) {
    throw new Error(`You don't have any additional profile data yet`);
  }
  return data as IReceiveProfileFromDB;
};

const getHashedPassword = (password: string): string => {
  return crypto.createHmac('sha256', CUSTOMER_PASSWORD_SECRET!).update(password).digest('hex');
};
