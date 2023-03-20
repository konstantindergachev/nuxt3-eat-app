import { supabase } from '@/client';
import { IRawSignin } from '@/interfaces/signin';
import { ISignup, ISignupResponse } from '@/interfaces/signup';

export const signinService = async (password: string): Promise<IRawSignin> => {
  const { data } = await supabase
    .from('customers')
    .select('id, firstname, lastname, email, password')
    .eq('password', password)
    .single();

  if (!data) {
    throw new Error(`Something went wrong. We're fixing the problem. Try later. Thank you.`);
  }
  if (data.password !== password) {
    throw new Error('No such customer!');
  }
  return data;
};

export const signupService = async (body: ISignup): Promise<ISignupResponse> => {
  const newCustomer = await supabase
    .from('customers')
    .insert([
      {
        firstname: body.fullname.split(' ')[0],
        lastname: body.fullname.split(' ')[1],
        email: body.email,
        password: body.password,
        password_confirm: body.passwordConfirm,
      },
    ])
    .single();

  if (newCustomer.error) {
    throw new Error(`Something went wrong. We're fixing the problem. Try later. Thank you.`);
  }

  return { status: newCustomer.status, message: newCustomer.statusText };
};
