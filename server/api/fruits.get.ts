import { fruits } from '../../stub/fruits';
import { IFruits } from '../../interfaces/fruits';

export default defineEventHandler((event): IFruits => {
  return { fruits };
});
