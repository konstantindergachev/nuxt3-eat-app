import { IFAQ } from '@/interfaces/faq';
import { supabase } from '@/client';

export default defineEventHandler(async (event): Promise<IFAQ[]> => {
  const { data } = await supabase.from('faq').select();
  return data as IFAQ[];
});
