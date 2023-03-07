import { supabase } from '@/client';
import { IFruit } from '@/interfaces/fruits';

export const fruitsService = async (): Promise<IFruit[]> => {
  const { data } = await supabase.from('fruits').select();

  return data as IFruit[];
};
