import { supabase } from '@/client';
import { IFruit } from '@/interfaces/fruits';

export const fruitsService = async (): Promise<IFruit[]> => {
  const { data } = await supabase.from('fruits').select();

  return data as IFruit[];
};

export const topFruitsService = async (): Promise<IFruit[]> => {
  const { data } = await supabase
    .from('fruits')
    .select()
    .order('popular', { ascending: false })
    .limit(3);

  return data as IFruit[];
};
