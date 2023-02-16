import { ISocial } from '@/interfaces/socials';
import { supabase } from '@/client';

export default defineEventHandler(async (event): Promise<ISocial[]> => {
  const { data } = await supabase.from('socials').select();
  return data as ISocial[];
});
