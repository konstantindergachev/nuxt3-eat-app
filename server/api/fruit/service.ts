import { supabase } from '@/client';
import { IFruit } from '@/interfaces/fruits';

export const fruitService = async (fruitId: number): Promise<IFruit | string> => {
  const { data } = await supabase.from('fruits').select().eq('id', fruitId);
  if (Array.isArray(data)) {
    return data[0];
  }
  return 'Fruit not found!';
};

export const addFruitToFavoriteService = async (body: IFruit): Promise<IFruit | string> => {
  await supabase
    .from('fruits')
    .update({ ...body })
    .eq('id', body.id);

  return fruitService(Number(body.id));
};
