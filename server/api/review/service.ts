import { db } from '@/server/db/clientDB';
import { ISlide } from '@/interfaces/review';

export const reviewService = async (): Promise<ISlide[]> => {
  const { data } = await db.from('reviews').select();
  return data as ISlide[];
};
