import { db } from '@/server/db/clientDB';
export const createLikeService = async (postId: number, customerId: number) => {
  const { data, status, statusText } = await db
    .from('post_likes')
    .insert([
      {
        customer_id: customerId,
        post_id: postId,
      },
    ])
    .select('id')
    .single();
  return { status, statusText, likeId: data?.id };
};
