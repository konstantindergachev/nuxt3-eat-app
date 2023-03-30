import { db } from '@/server/db/clientDB';
import { IFAQ } from '@/interfaces/faq';

export const faqService = async (): Promise<IFAQ[]> => {
  const { data } = await db.from('faqs').select();

  return data as IFAQ[];
};
