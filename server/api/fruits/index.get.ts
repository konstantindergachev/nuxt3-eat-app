import { fruitsService } from './service';
import { IFruit } from '~~/interfaces/fruits';

export default defineEventHandler(async (event): Promise<IFruit[]> => {
  const query = getQuery(event);

  return fruitsService(Number(query.fruitsLength));
});
