import { db } from '@/server/db/clientDB';
export const createLikeService = async (postId: number, customerId: number) => {
  const dbResponse = await db.from('post_likes').insert([
    {
      customer_id: customerId,
      post_id: postId,
    },
  ]);
  return { status: dbResponse.status, statusText: dbResponse.statusText };
};
