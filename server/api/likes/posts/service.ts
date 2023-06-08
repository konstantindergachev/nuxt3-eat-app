import { db } from '@/server/db/clientDB';
import { PostgrestResponse } from '@supabase/supabase-js';
import { IPostLike, IPostLikeResponse, IPostLikeStore } from '@/interfaces/postlike';
import { POST_UNAUTHORIZED } from '@/stub/constants';

export const createLikeService = async (
  body: IPostLike,
  customerId: number
): Promise<IPostLike> => {
  const { data } = await db
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
  return { postId: data?.post_id, isLiked: data?.is_liked };
};

export const updateLikeService = async (
  body: IPostLike,
  customerId: number
): Promise<IPostLike> => {
  const { data } = await db
    .from('post_likes')
    .update({ is_liked: body.isLiked })
    .eq('customer_id', customerId)
    .eq('post_id', body.postId)
    .select('id, post_id, is_liked')
    .single();

  return { postId: data?.post_id, isLiked: data?.is_liked };
};

export const receiveLikeService = async (customerId: number): Promise<IPostLikeStore> => {
  const dbResponse: PostgrestResponse<IPostLikeResponse> = await db
    .from('post_likes')
    .select('post_id, is_liked')
    .eq('customer_id', customerId);

  if (!dbResponse.data) {
    throw new Error(POST_UNAUTHORIZED);
  }

  const likes = dbResponse.data as IPostLikeResponse[];
  return transformLikesFieldName(likes);
};

const transformLikesFieldName = (likes: IPostLikeResponse[]): IPostLikeStore => {
  return likes.reduce((obj: IPostLikeStore, contest) => {
    const { post_id, is_liked } = contest;
    obj[post_id] = is_liked;
    return obj;
  }, {});
};
