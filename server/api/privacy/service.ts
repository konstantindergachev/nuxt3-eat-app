import { db } from '@/server/db/clientDB';
import { IPrivacy } from '@/interfaces/privacy';

export const privacyService = async (): Promise<IPrivacy[]> => {
  const { data } = await db.from('privacies').select();
  return data as IPrivacy[];
};
