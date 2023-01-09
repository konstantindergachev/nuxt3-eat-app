import { terms } from '@/stub/terms';
import { ITerms } from '@/interfaces/terms';

export default defineEventHandler((event): ITerms[] => {
  return terms;
});
