import { slides } from '@/stub/reviews';
import { ISlide } from '@/interfaces/review';

export default defineEventHandler((event): ISlide[] => {
  return slides;
});
