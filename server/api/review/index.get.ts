import { slides } from '@/stub/reviews';
import { ISlides } from '@/interfaces/review';

export default defineEventHandler((event): ISlides => {
  return { slides };
});
