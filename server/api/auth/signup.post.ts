import { supabase } from '@/client';
import { ISignup } from '@/interfaces/signup';

export default defineEventHandler(async (event): Promise<ISignup> => {
  const body: ISignup = await readBody(event);

  await supabase
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

  return { ...body };
});
