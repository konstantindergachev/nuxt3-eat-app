import { topFruitsService } from '../service';
import { IFruit } from '~~/interfaces/fruits';

export default defineEventHandler(async (event): Promise<IFruit[]> => {
  return topFruitsService();
});
