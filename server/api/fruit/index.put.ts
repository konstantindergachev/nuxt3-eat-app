import { IFruit } from '@/interfaces/fruits';
import { addFruitToFavoriteService } from './service';

export default defineEventHandler(async (event): Promise<IFruit | string> => {
  const body: IFruit = await readBody(event);

  return await addFruitToFavoriteService(body);
});
