import { supabase } from '@/client';
import { ISlide } from '@/interfaces/review';

export const reviewService = async (): Promise<ISlide[]> => {
  const { data } = await supabase.from('reviews').select();
  return data as ISlide[];
};
