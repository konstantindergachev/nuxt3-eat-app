import { db } from '@/server/db/clientDB';
import { ITerms } from '@/interfaces/terms';

export const termsService = async (): Promise<ITerms[]> => {
  const { data } = await db.from('terms').select();
  return data as ITerms[];
};
