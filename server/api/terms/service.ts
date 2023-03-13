import { supabase } from '@/client';
import { ITerms } from '@/interfaces/terms';

export const termsService = async (): Promise<ITerms[]> => {
  const { data } = await supabase.from('terms').select();
  return data as ITerms[];
};
