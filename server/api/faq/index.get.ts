import { faq } from '@/stub/faq';
import { IFAQ } from '@/interfaces/faq';

export default defineEventHandler((event): IFAQ[] => {
  return faq;
});
