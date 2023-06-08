import { db } from '@/server/db/clientDB';
import { IFruit } from '@/interfaces/fruits';
import { FRUIT_NOT_FOUND } from '@@/stub/constants';

export const fruitService = async (fruitId: number): Promise<IFruit | string> => {
  const { data } = await db.from('fruits').select().eq('id', fruitId);
  if (Array.isArray(data)) {
    return data[0];
  }
  return FRUIT_NOT_FOUND;
};

export const addFruitToFavoriteService = async (body: IFruit): Promise<IFruit | string> => {
  await db
    .from('fruits')
    .update({ ...body })
    .eq('id', body.id);

  return fruitService(Number(body.id));
};
