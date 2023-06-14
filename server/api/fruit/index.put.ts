import { addFruitToFavoriteService } from './service';
import { IFruit } from '~~/interfaces/fruits';

export default defineEventHandler(async (event): Promise<IFruit | string> => {
  const body: IFruit = await readBody(event);

  return await addFruitToFavoriteService(body);
});
