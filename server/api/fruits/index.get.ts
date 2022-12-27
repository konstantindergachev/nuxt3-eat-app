import { fruits } from '@/stub/fruits';
import { IFruit } from '@/interfaces/fruits';

export default defineEventHandler((event): IFruit[] => {
  return fruits;
});
