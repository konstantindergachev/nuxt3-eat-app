import crypto from 'crypto';
import { db } from '@/server/db/clientDB';
import { IRawSignin } from '@/interfaces/signin';
import { ISignup } from '@/interfaces/signup';
import { NOT_CUSTOMER, SOMETHING_WENT_WRONT } from '@/stub/constants';

const { CUSTOMER_PASSWORD_SECRET } = process.env;

export const signinService = async (password: string): Promise<IRawSignin> => {
  const hashedPassword = getHashedPassword(password);

  const { data } = await db
    .from('customers')
    .select('id, firstname, lastname, email, password')
    .eq('password', hashedPassword)
    .single();

  if (!data) {
    throw new Error(SOMETHING_WENT_WRONT);
  }
  if (data.password !== hashedPassword) {
    throw new Error(NOT_CUSTOMER);
  }
  return data;
};

export const signupService = async (body: ISignup): Promise<IRawSignin> => {
  const hashedPassword = getHashedPassword(body.password);
  const hashedPasswordConfirm = getHashedPassword(body.passwordConfirm);

  const newCustomer = await db
    .from('customers')
    .insert([
      {
        firstname: body.fullname.split(' ')[0],
        lastname: body.fullname.split(' ')[1],
        email: body.email,
        password: hashedPassword,
        password_confirm: hashedPasswordConfirm,
      },
    ])
    .single();

  if (newCustomer.error) {
    throw new Error(SOMETHING_WENT_WRONT);
  }
  return await signinService(body.password);
};

const getHashedPassword = (password: string): string => {
  return crypto.createHmac('sha256', CUSTOMER_PASSWORD_SECRET!).update(password).digest('hex');
};
