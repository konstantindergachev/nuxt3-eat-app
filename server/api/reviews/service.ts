import { db } from '@/server/db/clientDB';
import { ISlide, IReview } from '@/interfaces/review';

export const reviewsService = async (): Promise<ISlide[]> => {
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

export const postsService = async () => {
  const { data } = await db.from('posts').select('id, title, text, created_at, customers(*)');
  const posts = data?.map((post) => {
    const tempPost = {
      ...post,
      fullname: `${post.customers.firstname} ${post.customers.lastname}`,
    };
    const { customers, ..._post } = tempPost;
    return _post;
  });
  return posts;
};
