import { IDelivery } from '@/interfaces/delivery';
import { supabase } from '@/client';

export default defineEventHandler(async (event): Promise<IDelivery | string> => {
  const { data } = await supabase.from('delivery').select(`
    id,
    title,
    description,
    created_at,
    rules(
      id,
      title,
      description,
      created_at
    )
  `);

  return data as IDelivery;
});
