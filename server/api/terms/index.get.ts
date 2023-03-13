import { ITerms } from '@/interfaces/terms';
import { termsService } from './service';

export default defineEventHandler(async (event): Promise<ITerms[]> => {
  return termsService();
});
