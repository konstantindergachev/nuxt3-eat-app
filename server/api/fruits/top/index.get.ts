import { IFruit } from '@/interfaces/fruits';
import { topFruitsService } from '../service';

export default defineEventHandler(async (event): Promise<IFruit[]> => {
  return topFruitsService();
});
