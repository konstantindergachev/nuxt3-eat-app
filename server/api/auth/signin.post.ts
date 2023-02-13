import { supabase } from '@/client';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const { data } = await supabase
      .from('customers')
      .select('firstname, lastname, password')
      .single();

    if (data?.password !== body.password) {
      throw new Error('No such customer!');
    }
    return `${data?.firstname} ${data?.lastname}`;
  } catch (error) {
    console.error(error);
  }
});
