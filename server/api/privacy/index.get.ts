import { IPrivacy } from '@/interfaces/privacy';
import { supabase } from '@/client';

export default defineEventHandler(async (event): Promise<IPrivacy[]> => {
  const { data } = await supabase.from('privacy').select();
  return data as IPrivacy[];
});
