import { db } from '@/server/db/clientDB';
import { ISocial } from '@/interfaces/socials';

export default defineEventHandler(async (event): Promise<ISocial[]> => {
  const { data } = await db.from('socials').select();
  return data as ISocial[];
});
