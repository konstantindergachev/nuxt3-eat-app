import { IReturnRefund } from '@/interfaces/return';
import { supabase } from '@/client';

export default defineEventHandler(async (event): Promise<IReturnRefund[]> => {
  const { data } = await supabase.from('refund').select();
  return data as IReturnRefund[];
});
