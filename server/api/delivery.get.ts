import { db } from '@/server/db/clientDB';
import { IDelivery } from '@/interfaces/delivery';

export default defineEventHandler(async (event): Promise<IDelivery | string> => {
  const { data } = await db.from('deliveries').select(`
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
