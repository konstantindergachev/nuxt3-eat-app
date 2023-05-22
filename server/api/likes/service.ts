import { db } from '@/server/db/clientDB';
import { ILikeInfo } from '@/interfaces/like';

export const createLikeService = async (body: ILikeInfo, customerId: number) => {
  const { data, status, statusText } = await db
    .from('post_likes')
    .insert([
      {
        customer_id: customerId,
        post_id: body.postId,
        is_liked: body.isLiked,
      },
    ])
    .select('id, post_id, is_liked')
    .single();
  return { status, statusText, postId: data?.post_id, isLiked: data?.is_liked };
};
