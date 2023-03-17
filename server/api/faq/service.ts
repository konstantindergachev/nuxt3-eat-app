import { supabase } from '@/client';
import { IFAQ } from '@/interfaces/faq';

export const faqService = async (): Promise<IFAQ[]> => {
  const { data } = await supabase.from('faqs').select();

  return data as IFAQ[];
};
