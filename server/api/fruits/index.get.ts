import { IFruit } from '@/interfaces/fruits';
import { supabase } from '@/client';

export default defineEventHandler(async (event): Promise<IFruit[]> => {
  const { data } = await supabase.from('fruits').select();
  return data as IFruit[];
});
