import { faqService } from './service';
import { IFAQ } from '~~/interfaces/faq';

export default defineEventHandler(async (event): Promise<IFAQ[]> => {
  return faqService();
});
