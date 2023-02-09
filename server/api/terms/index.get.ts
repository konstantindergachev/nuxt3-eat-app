import { ITerms } from '@/interfaces/terms';
import { supabase } from '@/client';

export default defineEventHandler(async (event): Promise<ITerms[]> => {
  const { data } = await supabase.from('terms').select();
  return data as ITerms[];
});
