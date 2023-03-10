import { ISlide } from '@/interfaces/review';
import { reviewService } from './service';

export default defineEventHandler(async (event): Promise<ISlide[]> => {
  return reviewService();
});
