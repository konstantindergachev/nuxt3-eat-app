import { supabase } from '@/client';
import { IRawSignin } from '@/interfaces/signin';

export const signinService = async (password: string): Promise<IRawSignin> => {
  const customer = await supabase
    .from('customers')
    .select('firstname, lastname, password')
    .single();

  if (!customer.data) {
    throw new Error(`Something went wrong. We're fixing the problem. Try later. Thank you.`);
  }
  if (customer.data.password !== password) {
    throw new Error('No such customer!');
  }
  return customer.data;
};
