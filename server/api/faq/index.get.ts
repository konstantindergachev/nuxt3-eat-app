import { IFAQ } from '@/interfaces/faq';
import { faqService } from './service';

export default defineEventHandler(async (event): Promise<IFAQ[]> => {
  return faqService();
});
