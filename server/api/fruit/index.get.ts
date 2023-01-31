import { IFruit } from '@/interfaces/fruits';
import { supabase } from '@/client';

export default defineEventHandler(async (event): Promise<IFruit | string> => {
  const query = getQuery(event);
  const { data } = await supabase.from('fruits').select();
  if (data) {
    return data.find((fruit) => fruit.id.toString() === query.fruitId);
  }
  return 'Fruit not found!';
});
