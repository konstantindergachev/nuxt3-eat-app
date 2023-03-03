import { supabase } from '@/client';
import { signinService } from './service';
import { ISignin } from '@/interfaces/signin';

export default defineEventHandler(async (event) => {
  try {
    const body: ISignin = await readBody(event);

    const customer = await signinService(body.password);
    return `${customer.firstname} ${customer.lastname}`;
  } catch (error) {
    console.error(error);
  }
});
