import { db } from '@/server/db/clientDB';
import { ISlide, IReview } from '@/interfaces/review';

export const reviewService = async (): Promise<ISlide[]> => {
  const { data } = await db.from('reviews').select();
  return data as ISlide[];
};

export const createReviewService = async (
  customerId: number,
  body: IReview
): Promise<{ status: number; statusText: string }> => {
  const dbResponse = await db.from('posts').insert([
    {
      customer_id: customerId,
      title: body.title,
      text: body.text,
    },
  ]);
  return { status: dbResponse.status, statusText: dbResponse.statusText };
};
