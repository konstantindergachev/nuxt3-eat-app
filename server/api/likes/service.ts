import { db } from '@/server/db/clientDB';
import { PostgrestResponse } from '@supabase/supabase-js';
import { ILikeInfo, ILikeResponseFromDB, IPiniaLikeInfo } from '@/interfaces/like';

export const createLikeService = async (
  body: ILikeInfo,
  customerId: number
): Promise<ILikeInfo> => {
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

export const receiveLikeService = async (customerId: number): Promise<IPiniaLikeInfo> => {
  const dbResponse: PostgrestResponse<ILikeResponseFromDB> = await db
    .from('post_likes')
    .select('post_id, is_liked')
    .eq('customer_id', customerId);

  if (!dbResponse.data) {
    throw new Error(`If you want to see you're post likes, you need to be an authorized.`);
  }

  const likes = dbResponse.data as ILikeResponseFromDB[];
  return transformLikesFieldName(likes);
};

const transformLikesFieldName = (likes: ILikeResponseFromDB[]): IPiniaLikeInfo => {
  return likes.reduce((obj: IPiniaLikeInfo, contest) => {
    const { post_id, is_liked } = contest;
    obj[post_id] = is_liked;
    return obj;
  }, {});
};
