import { db } from '@/server/db/clientDB';
import { PostgrestResponse } from '@supabase/supabase-js';
import { IFruitLike, IFruitLikeResponse, IFruitLikeStore } from '@/interfaces/fruitlike';

export const createLikeService = async (
  body: IFruitLike,
  customerId: number
): Promise<IFruitLike> => {
  const { data } = await db
    .from('fruit_likes')
    .insert([
      {
        customer_id: customerId,
        fruit_id: body.fruitId,
        is_liked: body.isLiked,
      },
    ])
    .select('id, fruit_id, is_liked')
    .single();
  return { fruitId: data?.fruit_id, isLiked: data?.is_liked };
};

export const updateLikeService = async (
  body: IFruitLike,
  customerId: number
): Promise<IFruitLike> => {
  const { data } = await db
    .from('fruit_likes')
    .update({ is_liked: body.isLiked })
    .eq('customer_id', customerId)
    .eq('fruit_id', body.fruitId)
    .select('id, fruit_id, is_liked')
    .single();

  return { fruitId: data?.fruit_id, isLiked: data?.is_liked };
};

export const receiveLikeService = async (customerId: number): Promise<IFruitLikeStore> => {
  const dbResponse: PostgrestResponse<IFruitLikeResponse> = await db
    .from('fruit_likes')
    .select('fruit_id, is_liked')
    .eq('customer_id', customerId);

  if (!dbResponse.data) {
    throw new Error(`If you want to see you're fruit likes, you need to be an authorized.`);
  }

  const likes = dbResponse.data as IFruitLikeResponse[];
  return transformLikesFieldName(likes);
};

const transformLikesFieldName = (likes: IFruitLikeResponse[]): IFruitLikeStore => {
  return likes.reduce((obj: IFruitLikeStore, contest) => {
    const { fruit_id, is_liked } = contest;
    obj[fruit_id] = is_liked;
    return obj;
  }, {});
};
