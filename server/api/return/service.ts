import { supabase } from '@/client';
import { IReturnRefund } from '@/interfaces/return';

export const returnRefundService = async (): Promise<IReturnRefund[]> => {
  const { data } = await supabase.from('refund').select();
  return data as IReturnRefund[];
};
