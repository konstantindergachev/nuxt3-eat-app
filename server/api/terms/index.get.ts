import { termsService } from './service';
import { ITerms } from '~~/interfaces/terms';

export default defineEventHandler(async (event): Promise<ITerms[]> => {
  return termsService();
});
