import { supabase } from '@/client';
import { IReturnRefund } from '@/interfaces/return';

export const returnRefundService = async (): Promise<IReturnRefund[]> => {
  const { data } = await supabase.from('refunds').select();
  return data as IReturnRefund[];
};
