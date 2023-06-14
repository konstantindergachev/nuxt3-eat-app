import { fruitService } from './service';
import { IFruit } from '~~/interfaces/fruits';

export default defineEventHandler(async (event): Promise<IFruit | string> => {
  const query = getQuery(event);
  const fruitId = Number(query.fruitId);
  return await fruitService(fruitId);
});
