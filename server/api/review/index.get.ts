import { ISlide } from '@/interfaces/review';
import { supabase } from '@/client';

export default defineEventHandler(async (event): Promise<ISlide[]> => {
  const { data } = await supabase.from('reviews').select();
  return data as ISlide[];
});
