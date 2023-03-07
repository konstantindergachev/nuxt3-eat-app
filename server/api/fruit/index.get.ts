import { IFruit } from '@/interfaces/fruits';
import { fruitService } from './service';

export default defineEventHandler(async (event): Promise<IFruit | string> => {
  const query = getQuery(event);
  const fruitId = Number(query.fruitId);
  return await fruitService(fruitId);
});
