import { IFruit } from '@/interfaces/fruits';
import { fruitsService } from './service';

export default defineEventHandler(async (event): Promise<IFruit[]> => {
  return fruitsService();
});
