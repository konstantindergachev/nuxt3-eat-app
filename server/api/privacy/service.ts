import { supabase } from '@/client';
import { IPrivacy } from '@/interfaces/privacy';

export const privacyService = async (): Promise<IPrivacy[]> => {
  const { data } = await supabase.from('privacies').select();
  return data as IPrivacy[];
};
